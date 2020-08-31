export default function Input() {
  return (
    <form>
      <ul>
        <li>
          <label>Please enter an ETH address:</label>
          <input type="text" name="a"></input>
        </li>
        <li>
          <button type="submit">Analyze</button>
        </li>
      </ul>
      <style jsx>{`
        form {
          margin: 0.5rem auto;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        li {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0.5rem 0;
        }

        label {
          flex-basis: 16rem;
        }

        input {
          flex: 1;
        }

        button {
          margin: auto;
        }
      `}</style>
    </form>
  );
}
