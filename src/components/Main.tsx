import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form action="" className="form">
          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>
            What would you say that are the best features of your rubber duck?
          </h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" />
                <span>It's yellow!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>It squeaks!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>It has a logo!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>Its big!</span>
              </label>
            </li>
          </ul>

          <h3>
            What would you say that are the worst features of your rubber duck?
          </h3>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" />
                <span>It's yellow!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>It squeaks!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>It has a logo!</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>Its big!</span>
              </label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className="form__group radio">
            <li>
              <input
                id="consistency-1"
                type="radio"
                name="consistency"
                value="1"
              />
              <label htmlFor="consistency-1">1</label>
            </li>
            <li>
              <input
                id="consistency-2"
                type="radio"
                name="consistency"
                value="1"
              />
              <label htmlFor="consistency-2">2</label>
            </li>
            <li>
              <input
                id="consistency-3"
                type="radio"
                name="consistency"
                value="1"
              />
              <label htmlFor="consistency-3">3</label>
            </li>
            <li>
              <input
                id="consistency-4"
                type="radio"
                name="consistency"
                value="1"
              />
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck colour?</h3>
          <ul className="form__group radio">
            <li>
              <input id="colour-1" type="radio" name="colour" value="1" />
              <label htmlFor="colour-1">1</label>
            </li>
            <li>
              <input id="colour-2" type="radio" name="colour" value="1" />
              <label htmlFor="colour-2">2</label>
            </li>
            <li>
              <input id="colour-3" type="radio" name="colour" value="1" />
              <label htmlFor="colour-3">3</label>
            </li>
            <li>
              <input id="colour-4" type="radio" name="colour" value="1" />
              <label htmlFor="colour-4">4</label>
            </li>
          </ul>

          <h3> How do you rate your rubber duck logo?</h3>
          <ul className="form__group radio">
            <li>
              <input id="logo-1" type="radio" name="logo" value="1" />
              <label htmlFor="logo-1">1</label>
            </li>
            <li>
              <input id="logo-2" type="radio" name="logo" value="1" />
              <label htmlFor="logo-2">2</label>
            </li>
            <li>
              <input id="logo-3" type="radio" name="logo" value="1" />
              <label htmlFor="logo-3">3</label>
            </li>
            <li>
              <input id="logo-4" type="radio" name="logo" value="1" />
              <label htmlFor="logo-4">4</label>
            </li>
          </ul>

          <h3>How do you like to spent time with your rubber duck?</h3>
          <ul className="form__group">
            <li>
              <input type="checkbox" />
              swimming
            </li>
            <li>
              <input type="checkbox" />
              bathing
            </li>
            <li>
              <input type="checkbox" />
              Chatting
            </li>
            <li>
              <input type="checkbox" />I don't like to spend time with it
            </li>
          </ul>

          <label htmlFor="">
            <span>What else have you got to say about your rubber duck?</span>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </label>
          <label htmlFor="">
            <span>Put your name here (if you feel like it):</span>
            <input type="text" />
          </label>
          <label htmlFor="">
            <span>Leave us your email pretty please?</span>
            <input type="email" />
          </label>
          <button
            className="form__submit"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            Submit survey!
          </button>
        </form>
      </section>
    </main>
  );
}

export default Main;
