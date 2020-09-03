export default function Input() {
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="address">Please enter an ETH address:</label>
          <input type="text" id="address" name="a" required />
        </li>
        <li>
          <button type="submit">Analyze</button>
        </li>
        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          li {
            display: flex;
            flex-flow: wrap;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin: 0.5rem 0;
          }

          input {
            flex: auto;
          }
        `}</style>
      </ul>
    </form>
  );
}
