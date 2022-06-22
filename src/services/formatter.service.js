export function formatTranscriptContent(content) {
    const rows = content.split(/\r?\n/);
    return rows.map((row) => {
        const formattedRow = row.split(/:(.*)/s);
        formattedRow.pop();
        return formattedRow;
    });
};