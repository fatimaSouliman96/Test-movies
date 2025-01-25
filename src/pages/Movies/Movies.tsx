import { useNavigate } from "react-router-dom";
import { MoviesColumns, MoviesRows } from "../../components/Tabel/data";
import DataTable from "../../components/Tabel/DataTabel";
import "./movies.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import { fetchPosts } from "../../state/movies/moviesSlice";
import { CircularProgress } from "@mui/material";

export default function Movies() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isloading, isErrore } = useSelector((state: RootState) => state.movies);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="movies">
      <h1>All Movies</h1>
      <button onClick={() => navigate("add_movie")} className="btn">
        Add Movie
      </button>

      {/* Loading State */}
      {isloading && (
        <div className="loading-container">
          <CircularProgress size={40} color="inherit" />
        </div>
      )}

      {/* Error State */}
      {isErrore && !isloading && (
        <p className="error-message">
          Failed to load movies. Please try again later.
        </p>
      )}

      {/* Data Display */}
      {!isloading && !isErrore && (
        <>
          {data.length > 0 ? (
            <DataTable movies={true} columns={MoviesColumns} rows={data ? data : MoviesRows} />
          ) : (
            <p className="text-not-found">There are no movies to show. Add one!</p>
          )}
        </>
      )}
    </div>
  );
}

