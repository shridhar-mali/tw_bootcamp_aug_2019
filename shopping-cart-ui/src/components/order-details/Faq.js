import React from 'react';

class Faq extends React.Component {

    render() {
        return <div>
            <h3 className="my-4">FAQs</h3>
            <hr/>
            <div className="my-4">
                <h5>1. How do I pay for the book?</h5>
                <p>You'll pay when we deliver the purchased book to you. Keep the exact cash ready.</p>

                <h5>2. When'll the book reach me?</h5>
                <p>It depends on the region you are. We'll usually ship within 2 days. If you've ordered outside
                    India, it'll take few more days for the courier to reach you.</p>

                <h5>3. How can I reach you?</h5>
                <p>You can write to us at <em className="badge badge-warning">bookshop@alchemists.com</em> or
                    call
                    us at <em className="badge badge-warning">+90 90000 12345</em></p>
            </div>
        </div>
    }
}

export default Faq;