import { TbArrowWaveRightUp } from 'react-icons/tb';
import './add.css';
import { BiUpload } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';

interface MovieFields {
    title: string;
    director: string;
    hours: string;
    minutes: string;
    rating: string;
    actors: string;
    year: string;
    summary: string;
    image: File | string | null;
}

export default function EditMovie() {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);

    const [fields, setFields] = useState<MovieFields>({
        title: location.state.data.name,
        director: location.state.data.director,
        hours: location.state.data.hours,
        minutes: location.state.data.minutes,
        rating: location.state.data.rating,
        actors: location.state.data.actors,
        year: location.state.data.year,
        summary: location.state.data.summary,
        image: location.state.data.poster,
    });

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1980 + 1 }, (_, i) => 1980 + i);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFields((prev) => ({ ...prev, [id]: value }));
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value)) && Number(value) >= 0 && Number(value) <= 5) {
            setFields({ ...fields, rating: value });
        } else if (value === '') {
            setFields({ ...fields, rating: '' });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFields((prev) => ({ ...prev, image: file }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const payload: Record<string, any> = {};
        for (const key in fields) {
            if (fields[key as keyof MovieFields] && key !== 'image') {
                payload[key] = fields[key as keyof MovieFields];
            }
        }

        try {
            if (fields.image instanceof File) {
                const reader = new FileReader();
                reader.readAsDataURL(fields.image);
                reader.onloadend = async () => {
                    payload.poster = reader.result;
                    await sendRequest(payload);
                };
                reader.onerror = () => {
                    alert('Failed to process the image.');
                    setLoading(false);
                };
            } else {
                payload.poster = fields.image;
                await sendRequest(payload);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const sendRequest = async (payload: Record<string, any>) => {
        try {
            const response = await fetch(`http://localhost:3000/movies/${location.state.data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Movie updated successfully!');
                navigate('/movies');
            } else {
                alert('Failed to update the movie. Please try again.');
            }
        } catch (error) {
            console.error('Error updating movie:', error);
            alert('An error occurred while updating the movie.');
        }
    };

    return (
        <div className="add">
            {loading && <LinearProgress />} {/* Show progress bar when loading */}
            <div className="head">
                <p className="add-title">Edit the movie</p>
                <TbArrowWaveRightUp size={40} onClick={() => navigate('/movies')} />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    {/* Title */}
                    <div className="feild">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={fields.title} onChange={handleChange} />
                    </div>

                    {/* Director */}
                    <div className="feild">
                        <label htmlFor="director">Director</label>
                        <input type="text" id="director" value={fields.director} onChange={handleChange} />
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
                                value={fields.hours}
                                onChange={(e) => setFields({ ...fields, hours: e.target.value })}
                            />
                            <input
                                className="input2"
                                type="number"
                                placeholder="Minutes"
                                min="0"
                                max="59"
                                id="minutes"
                                required
                                value={fields.minutes}
                                onChange={(e) => setFields({ ...fields, minutes: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="feild">
                        <label htmlFor="rating">Rating</label>
                        <input type="text" id="rating" value={fields.rating} onChange={handleRatingChange} />
                    </div>

                    {/* Actors */}
                    <div className="feild">
                        <label htmlFor="actors">Actors</label>
                        <input type="text" id="actors" value={fields.actors} onChange={handleChange} />
                    </div>

                    {/* Year */}
                    <div className="feild">
                        <label htmlFor="year">
                            Year <span style={{ color: 'red' }}>*</span>
                        </label>
                        <select
                            id="year"
                            required
                            value={fields.year}
                            onChange={(e) => setFields({ ...fields, year: e.target.value })}
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
                        <label htmlFor="summary">Summary</label>
                        <textarea
                            rows={4}
                            id="summary"
                            value={fields.summary}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="btn" disabled={loading}>
                        {loading ? <CircularProgress size={20} color="inherit" /> : 'Save'}
                    </button>
                </div>

                {/* Image Upload */}
                <div className="add-img">
                    <p>Poster</p>
                    {fields.image ? (
                        <div>
                            <div className="container">
                                <img
                                    src={typeof fields.image === 'string' ? fields.image : URL.createObjectURL(fields.image)}
                                    alt="Poster Preview"
                                    className="full-container-image"
                                />
                                <input id="file" type="file" accept="image/*" onChange={handleFileChange} />
                            </div>
                            <label className="change-label" htmlFor="file">
                                Change Poster
                            </label>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="file">
                                <BiUpload size={100} />
                            </label>
                            <input id="file" type="file" accept="image/*" onChange={handleFileChange} />
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

