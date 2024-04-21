import React, { useState, useEffect } from 'react';

function WordCounter() {
    const [text, setText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [totalReadingTime, setTotalReadingTime] = useState(88); // Initialize with 88 minutes

    useEffect(() => {
        // Load initial text and search term from localStorage if available
        const storedText = localStorage.getItem('text');
        const storedSearchTerm = localStorage.getItem('searchTerm');
        if (storedText) {
            setText(storedText);
        }
        if (storedSearchTerm) {
            setSearchTerm(storedSearchTerm);
        }
    }, []);

    useEffect(() => {
        // Update localStorage whenever text changes
        localStorage.setItem('text', text);
        localStorage.setItem('searchTerm', searchTerm);
    }, [text, searchTerm]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRefresh = () => {
        setText('');
        setSearchTerm('');
        localStorage.removeItem('text');
        localStorage.removeItem('searchTerm');
    };

    const handleReadingTimeChange = (event) => {
        setTotalReadingTime(event.target.value);
    };

    const formatTime = (timeInMinutes) => {
        const hours = Math.floor(timeInMinutes / 60);
        const minutes = Math.floor(timeInMinutes % 60);
        const seconds = Math.floor((timeInMinutes * 60) % 60);
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    const getParagraphWordAndLineCounts = (inputText) => {
        const paragraphs = inputText.split(/\n+/);
        const totalWords = paragraphs.reduce((sum, paragraph) => sum + paragraph.trim().split(/\s+/).filter(word => word !== '').length, 0);
        let cumulativeTime = 0;
        const paragraphDetails = paragraphs.map(paragraph => {
            const words = paragraph.trim().split(/\s+/).filter(word => word !== '');
            const proportion = words.length / totalWords;
            const paragraphReadingTime = totalReadingTime * proportion;
            cumulativeTime += paragraphReadingTime;
            return {
                text: paragraph,
                wordCount: words.length,
                lineCount: paragraph.split('\n').filter(line => line.trim() !== '').length,
                estimatedReadingTime: formatTime(cumulativeTime)
            };
        });
        return {
            paragraphs: paragraphDetails,
            totalWords,
            totalParagraphs: paragraphDetails.length
        };
    };

    const { paragraphs, totalWords, totalParagraphs } = getParagraphWordAndLineCounts(text);

    const highlightSearchTerms = (paragraphText, searchTerm) => {
        if (!searchTerm) return { __html: paragraphText };

        const lines = paragraphText.split('\n');
        const highlightedText = lines.map((line, index) => {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedLine = line.replace(regex, '<span style="background-color: yellow;">$1</span>');
            return `<span>${highlightedLine}</span><br/>`;
        }).join('');

        return { __html: highlightedText };
    };

    return (
        <div className="container p-20">
            <h1>Word and Line Counter</h1>
            <textarea
                className="text-area p-10"
                value={text}
                onChange={handleChange}
                placeholder="Type or paste your text here, separate paragraphs with a newline..."
                rows="10"
                cols="120"
                style={{ border: '2px solid blue', padding: '2px', height: '150px' }}
            />
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Enter text to search..."
                style={{ marginTop: '10px', padding: '2px', width: '100%', border: '2px solid blue', height: '38px' }} // Adjusted height to match other inputs
            />
            <input
                type="range"
                min="1"
                max="180"
                value={totalReadingTime}
                onChange={handleReadingTimeChange}
                style={{ display: 'block', marginTop: '10px', width: '100%' }}
            />
            <div>{`Adjust Total Reading Time: ${formatTime(totalReadingTime)}`}</div>
            <button
                onClick={handleRefresh}
                style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Refresh
            </button>
            <div className="word-counts">
                {paragraphs.map((paragraph, index) => (
                    <div key={index} style={{ marginTop: '20px' }}>
                        <strong>Paragraph {index + 1} - Words: {paragraph.wordCount}, Lines: {paragraph.lineCount}</strong>
                        <p>Estimated Reading Time: {paragraph.estimatedReadingTime}</p>
                        <div style={{ marginTop: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}
                            dangerouslySetInnerHTML={highlightSearchTerms(paragraph.text, searchTerm)}>
                        </div>
                    </div>
                ))}
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#ccc' }}>
                    <strong>Total Paragraphs:</strong> {totalParagraphs}<br/>
                    <strong>Total Words:</strong> {totalWords}<br/>
                    <strong>Total Estimated Reading Time:</strong> {formatTime(totalReadingTime)}
                </div>
            </div>
        </div>
    );
}

export default WordCounter;
