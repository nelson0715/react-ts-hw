
import './App.css';

function App() {
  return (
    <>
      <div id="app">
        <header className="introduce">
          <h1>大家好!</h1>
          <h2>我是廖則宇</h2>
          <h3>就讀淡江大學</h3>
          <p>目前是資訊管理學系三年級!</p>
        </header>

        <section className="Program code">
          <h4>目前接觸過的程式語言</h4>
          <ul>
            <li>Python 學習時長1年</li>
            <li>Java 學習時長2年</li>
          </ul>
        </section>

        <section className="Contact information">
          <h4>聯絡方式</h4>
          <ul>
            <li><strong>Line ID:</strong> 付費解鎖</li>
            <li><strong>Email:</strong> 付費解鎖</li>
          </ul>
        </section>

        <section className="personal experience">
          <h4>大學經歷</h4>
          <ul>
            <li>
              <em>2022-2023</em>&nbsp;<strong>大學一年級</strong>
              <ol>
                <li>跳出舒適圈,交新朋友!</li>
              </ol>
            </li>
            <li>
              <em>2023-2024</em>&nbsp;<strong>大學二年級</strong>
              <ol>
                <li>努力學習,參加社團</li>
              </ol>
            </li>
            <li>
              <em>2024-2025</em>&nbsp;<strong>大學三年級</strong>
              <ol>
                <li>正在經歷中</li>
                <li>已經快躺平了~</li>
              </ol>
            </li>
          </ul>
        </section>

        <section className="GAME">
          <h4>最近在玩的遊戲</h4>
          <div className="game">
            <h5>傳說對決</h5>
            <img
              width="150"
              src="https://upload.wikimedia.org/wikipedia/zh/f/fd/%E5%82%B3%E8%AA%AA%E5%B0%8D%E6%B1%BA%E5%8F%B0%E7%81%A3LOGO.png"
              alt="傳說對決 Logo"
            />
          </div>
        </section>

        <section className="Game information">
          <h4>遊戲資訊</h4>
          <table>
            <thead>
              <tr>
                <th>遊戲名稱</th>
                <th>遊戲資訊</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>傳說對決</td>
                <td>
                  <a href="https://moba.garena.tw/">檢視遊戲資訊</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="comments section">
          <h4>其他</h4>
          <form action="/submit" method="post">
            <label htmlFor="comment">發送留言:</label>
            <input
              type="text"
              id="comment"
              name="comment"
              placeholder="輸入你的想法"
            />
            <input type="submit" value="送出" />
          </form>
          <p>
            <span className="highlight">留言功能暫不開放</span>
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
