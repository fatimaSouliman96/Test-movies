import { BiUpload } from 'react-icons/bi';
import './add.css';
import { TbArrowWaveRightUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { apiBaseUrl } from '../../constans/baseUrl';

export default function AddMovie() {
    const navigate = useNavigate();

    // States for form fields
    const [image, setImage] = useState<File>();
    const [title, setTitle] = useState<string>('');
    const [director, setDirector] = useState<string>('');
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [rating, setRating] = useState<string>('');
    const [actors, setActors] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [summary, setSummary] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // Generate years from 1980 to the current year
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1980 + 1 }, (_, i) => 1980 + i);

    // Handle rating validation
    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= 5) {
            setRating(value);
        } else if (value === '') {
            setRating('');
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !director || !hours || !minutes || !rating || !actors || !year || !summary || !image) {
            alert('Please fill in all fields.');
            return;
        }

        setLoading(true);

        // Convert the image to a base64 string
        const reader = new FileReader();
        reader.readAsDataURL(image!);
        reader.onloadend = async () => {
            const movie = {
                id: new Date().getTime(), // Unique ID
                name: title,
                year,
                summary,
                director,
                hours,
                minutes,
                rating,
                actors,
                poster: reader.result, // Base64 image
            };

            try {
                const response = await fetch(`${apiBaseUrl}/movies`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(movie),
                });

                if (response.ok) {
                    alert('Movie added successfully!');
                    navigate('/movies'); // Redirect to the movies page
                } else {
                    alert('Failed to add the movie. Please try again.');
                }
            } catch (error) {
                console.error('Error adding movie:', error);
                alert('An error occurred while adding the movie.');
            } finally {
                setLoading(false);
            }
        };

        reader.onerror = () => {
            setLoading(false);
            alert('Failed to process the image.');
        };
    };

    return (
        <div className="add">
            <div className="head">
                <p className="add-title">Add a movie</p>
                <TbArrowWaveRightUp size={40} onClick={() => navigate('/movies')} />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    {/* Title */}
                    <div className="feild">
                        <label htmlFor="title">
                            Title <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Director */}
                    <div className="feild">
                        <label htmlFor="director">
                            Director <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="director"
                            required
                            value={director}
                            onChange={(e) => setDirector(e.target.value)}
                        />
                    </div>

                    {/* Display Duration */}
                    <div className="feild display">
                        <label htmlFor="display">
                            Display Duration <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div className="duration-inputs">
                            <input
                                type="number"
                                placeholder="Hours"
                                min="0"
                                id="hours"
                                required
                                value={hours}
                                onChange={(e) => setHours(e.target.value)}
                            />
                            <input
                                className='input2'
                                type="number"
                                placeholder="Minutes"
                                min="0"
                                max="59"
                                id="minutes"
                                required
                                value={minutes}
                                onChange={(e) => setMinutes(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="feild">
                        <label htmlFor="rating">
                            Rating (0-5) <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="rating"
                            required
                            value={rating}
                            onChange={handleRatingChange}
                        />
                    </div>

                    {/* Actors */}
                    <div className="feild">
                        <label htmlFor="actors">
                            Actors <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="actors"
                            required
                            value={actors}
                            onChange={(e) => setActors(e.target.value)}
                        />
                    </div>

                    {/* Year Dropdown */}
                    <div className="feild">
                        <label htmlFor="year">
                            Year <span style={{ color: 'red' }}>*</span>
                        </label>
                        <select
                            id="year"
                            required
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>
                                Select a year
                            </option>
                            {years.map((yr) => (
                                <option key={yr} value={yr}>
                                    {yr}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Summary */}
                    <div className="feild summary">
                        <label htmlFor="summary">
                            Summary <span style={{ color: 'red' }}>*</span>
                        </label>
                        <textarea
                            rows={4}
                            id="summary"
                            required
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Add Button */}
                    <button className="btn" type="submit" disabled={loading}>
                        {loading ? 'Adding...' : 'Add'}
                    </button>
                </div>

                {/* Image Upload */}
                <div className="add-img">
                    <p>
                        Poster <span style={{ color: 'red' }}>*</span>
                    </p>
                    {image ? (
                        <div className="container">
                            <div className="image-container">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Poster Preview"
                                    className="full-container-image"
                                />
                            </div>
                            <label className="change-label" htmlFor="file">
                                If you want to change
                            </label>
                            <input
                                id="file"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) setImage(file);
                                }}
                            />
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="file">
                                <BiUpload size={100} />
                            </label>
                            <input
                                id="file"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) setImage(file);
                                }}
                            />
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}





