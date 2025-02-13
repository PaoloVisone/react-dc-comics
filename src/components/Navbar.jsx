export default function Navbar() {
    const navElements = [
        { id: 1, text: 'CHARACTERS', url: '#' },
        { id: 2, text: 'COMICS', url: '#' },
        { id: 3, text: 'MOVIES', url: '#' },
        { id: 4, text: 'TV', url: '#' },
        { id: 5, text: 'GAME', url: '#' },
        { id: 6, text: 'COLLECTIBLES', url: '#' },
        { id: 7, text: 'VIDEOS', url: '#' },
        { id: 8, text: 'FANS', url: '#' },
        { id: 9, text: 'NEWS', url: '#' },
        { id: 10, text: 'SHOP', url: '#' }
    ];

    return (
        <ul id="nav-menu">
            {/* Itero gli elementi */}
            {navElements.map((navElement) => (
                <li key={navElement.id}>
                    <a href={navElement.url}>
                        {navElement.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}