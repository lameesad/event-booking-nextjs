import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head />
                <body>
                    <div id='overlays'></div>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument