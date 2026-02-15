const reactFacts = [
    "Was first released in 2013",
    "Was originally created by Jorden Walke",
    "Has well over 100k stars on GitHub",
    "Is maintained by Meta",
    "Powers thousands of enterprise apps, including mobile apps",
];

export default function MainContent() {
    return (
        <main>
            <h2>Fun Facts about React</h2>
            <ul className="react-facts">
                {reactFacts.map((li) => (
                    <li key={li}> {li} </li>
                ))}
            </ul>
        </main>
    );
}
