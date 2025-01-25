import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

// ===================================================================
// ========================== Movies ===============================
export type Movie = {
  id: number;
  name: string;
  year: string;
  summary: string;
  director: string;
  hours: number,
  minutes: number,
  rating: number;
  actors: string;
};

type MovieRow = Partial<Movie>; // For rows that may not include all fields

export const MoviesColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 20,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.id}</p>
    ),
  },
  {
    field: "name",
    headerName: "Movie Name",
    width: 150,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.name}</p>
    ),
  },
  {
    field: "year",
    headerName: "Year",
    width: 100,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.year}</p>
    ),
  },
  {
    field: "summary",
    headerName: "Summary",
    width: 200,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.summary}</p>
    ),
  },
  {
    field: "director",
    headerName: "Director",
    width: 150,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.director}</p>
    ),
  },
  {
    field: "display",
    headerName: "Display Duration",
    width: 150,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.hours} h {params.row.minutes} m</p>
    ),
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 100,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.rating}</p>
    ),
  },
  {
    field: "actors",
    headerName: "Actors",
    width: 200,
    renderCell: (params: GridRenderCellParams<MovieRow>) => (
      <p className="heads-table">{params.row.actors}</p>
    ),
  },
];

export const MoviesRows: MovieRow[] = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    year: "1994",
    summary: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    hours: 2,
    minutes: 25,
    rating: 9.3,
    actors: "Tim Robbins, Morgan Freeman",
  },
  {
    id: 2,
    name: "The Godfather",
    year: "1972",
    summary: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    hours: 2,
    minutes: 25,
    rating: 9.2,
    actors: "Marlon Brando, Al Pacino",
  },
  {
    id: 3,
    name: "The Dark Knight",
    year: "2008",
    summary: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    director: "Christopher Nolan",
    hours: 2,
    minutes: 25,
    rating: 9.0,
    actors: "Christian Bale, Heath Ledger",
  },
  {
    id: 4,
    name: "Pulp Fiction",
    year: "1994",
    summary: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    hours: 2,
    minutes: 25,
    rating: 8.9,
    actors: "John Travolta, Uma Thurman",
  },
  {
    id: 5,
    name: "Schindler's List",
    year: "1993",
    summary: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    hours: 2,
    minutes: 25,
    rating: 8.9,
    actors: "Liam Neeson, Ralph Fiennes",
  },
];


