
import './Footer.css';

export function Footer() {
    // const {filters} = useFilters()
    // const {cart } = useCart();
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <h4>© {currentYear} - All right s reserved - <span> @midudev</span></h4>
            <h5>Shoping Cart con useContext & useReducer</h5>
        </footer>
    )
}