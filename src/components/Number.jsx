/* eslint-disable no-plusplus */
/* eslint-disable func-names */

import { useEffect } from "react";
import Proptypes from "prop-types";

const Number = ({ nbr, id }) => {
  useEffect(() => {
    const number = document.getElementById(id);

    const start = 1;
    const end = nbr;
    const ticks = 20;
    const speed = 60;

    const randomNumbers = [end];

    for (let i = 0; i < ticks - 1; i++) {
      randomNumbers.unshift(
        Math.floor(Math.random() * (end - start + 1) + start)
      );
    }

    randomNumbers.sort((a, b) => {
      return a - b;
    });

    let x = 0;
    const interval = setInterval(function () {
      number.innerHTML = randomNumbers.shift();

      if (++x === ticks) {
        window.clearInterval(interval);
      }
    }, speed);
  }, []);
  return <div id={id}>0</div>;
};

Number.propTypes = {
  nbr: Proptypes.number.isRequired,
  id: Proptypes.string.isRequired,
};

export default Number;
