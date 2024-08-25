
import { Slide, toast } from 'react-toastify';
export default function Button({ children, setAllArticles }) {
    const handleClick = () => {
        localStorage.setItem('articles', JSON.stringify([]));
        setAllArticles([]);
        toast.success('History Deleted Successfully 🎯', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,

        });
    }
    return (
        <button onClick={handleClick} className="text-sm bg-red-600 hover:bg-red-500 font-bold transition-colors duration-300 w-fit-content text-black-500 px-3 py-1 rounded-full cursor-pointer">
            {children}
        </button>
    )
}
