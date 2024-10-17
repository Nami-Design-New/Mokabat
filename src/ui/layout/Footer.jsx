export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-4">
            <div className="news_letter">
              <p>
                SUBSCRIBE TO OUR <span>NEWSLETTER</span>
              </p>
              <h3>Receive the latest news and updates</h3>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-12 p-2"></div>
        </div>
      </div>
    </footer>
  );
}
