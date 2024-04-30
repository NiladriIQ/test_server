import fs from 'fs';
import axios from 'axios';

async function readUrlsFromFile(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        const urls = data.split('\n').map(url => url.trim());
        return urls.filter(url => url !== '');
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}

async function fetchAndWritePages(urls) {
    try {
        const promises = urls.map(async (url, index) => {
            try {
                const response = await axios.get(url);
                await fs.promises.writeFile(`page${index + 1}.html`, response.data);
                console.log(`Page ${index + 1} fetched and written successfully.`);
            } catch (err) {
                console.error(`Error fetching ${url}:`, err);
            }
        });
        await Promise.all(promises);
        console.log('All pages fetched and written successfully.');
    } catch (err) {
        console.error('Error fetching pages:', err);
    }
}

// Usage
const filePath = 'urls.txt';
readUrlsFromFile(filePath)
    .then(urls => fetchAndWritePages(urls))
    .catch(err => console.error('Error:', err));
