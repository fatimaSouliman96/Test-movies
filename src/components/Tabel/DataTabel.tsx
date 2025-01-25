import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useMemo, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./table.css";
import { BiDetail, BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ModalPob from "../modal/Modal";
import Delete from "../delete/Delete";

type Movie = {
  id: number;
  name: string;
  year: string;
  summary: string;
  director: string;
  display: string;
  rating: number;
  actors: string;
};

interface DataTableProps {
  columns: GridColDef[];
  movies?: boolean;
  rows?: Movie[];
}

const DataTable = ({
  columns,
  movies,
  rows = [],
}: DataTableProps) => {

 
  const navigate = useNavigate()
  const [openDelete, setOpenDelete] = useState(false);
  const [id, setId] = useState<number>()

  const handleOpenDelete = (id: number) => {
    setOpenDelete(true)
    setId(id)
  }
  const handleCloseDelete = () => {
    setOpenDelete(false)
  }
  const extendedColumns = useMemo(() => {
    const newColumns = [...columns];

    if (movies) {
      newColumns.push({
        field: "action",
        headerName: "",
        width: 100,
        renderCell: (params: GridRenderCellParams) => (
          <div className="actions">
            <BiEdit title="edit" onClick={() => navigate("edit_movie", {state: {data: params.row}})} className="edit" size={80} />
            <BiTrash title="delete" className="delete" onClick={() => handleOpenDelete(params.row.id)} size={80} />
            <BiDetail title="details" onClick={() => navigate("movie_details", {state: {data: params.row}})} className="details" size={80} />
          </div>
        ),
      });
    }

    return newColumns;
  }, [columns, movies]);

  return (
    <div className="table-data">
      
        <div className="dataTable">
     
          <DataGrid
            className="dataGrid"
            rows={rows}
            sx={{ width: "100%" }}
            columns={extendedColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            checkboxSelection={false}
            disableRowSelectionOnClick
          />
          
        </div>
      
      {!rows && <CircularProgress className="ml-[50%] mt-[10%]" />}
      <ModalPob open={openDelete} handleClose={handleCloseDelete}  >
        <Delete id={id} handleClose={handleCloseDelete} />
      </ModalPob>
    </div>
  );
};

export default DataTable;




