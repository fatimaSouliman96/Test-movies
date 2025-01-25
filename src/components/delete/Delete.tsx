import './delete.css';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { fetchPosts } from '../../state/movies/moviesSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../state/store';

interface ModalPobProps {
    handleClose: () => void;
    id: number | undefined;
}

export default function Delete({ handleClose, id }: ModalPobProps) {
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleDelete = async () => {
        if (!id) return;

        setLoading(true); // Show progress
        try {
            const response = await fetch(`http://localhost:3000/movies/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Movie deleted successfully!');
                handleClose(); // Close the modal on success
                dispatch(fetchPosts())
            } else {
                alert('Failed to delete the movie. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting movie:', error);
            alert('An error occurred while deleting the movie.');
        } finally {
            setLoading(false); // Hide progress
        }
    };

    return (
        <div className="delete">
            <p>Are you sure you want to delete this movie?</p>
            <div>
                <button
                    className="del"
                    onClick={handleDelete}
                    disabled={loading} 
                >
                    {loading ? <CircularProgress size={20} color="inherit" /> : 'Delete'}
                </button>
                <button
                    className="cancel"
                    onClick={handleClose}
                    disabled={loading} 
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

