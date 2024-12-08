export default function handler(req, res) {
    if (req.method === 'POST') {
        // Nhận dữ liệu từ Google Apps Script
        const { message } = req.body;

        // (Bạn có thể lưu tin nhắn vào cơ sở dữ liệu hoặc file JSON tại đây)

        console.log('New message:', message);

        // Phản hồi thành công
        res.status(200).json({ status: 'success', message: 'Message received!' });
    } else if (req.method === 'GET') {
        // Trả danh sách tin nhắn (giả lập, bạn có thể lấy từ cơ sở dữ liệu)
        res.status(200).json(['Hello', 'Welcome', 'New message here']);
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
