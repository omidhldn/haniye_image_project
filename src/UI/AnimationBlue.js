import { useEffect, useRef } from "react";
import p5 from "p5";

import classes from "./Animation.module.css";

let dim;

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    // p.createCanvas(71, 40); //(width,height)
    p.createCanvas(window. innerWidth/4, 200); //(width,height)
    dim = p.width / 2;
    p.background(0);
    p.colorMode(p.HSB, 360, 100, 100);
    p.noStroke();
    p.ellipseMode(p.RADIUS);
    p.frameRate(1);
  };

  p.draw = function () {
    // your draw code here
    let y = p.height / 2;

    p.background(0);
    for (let x = 0; x <= p.width; x += dim) {
      let radius = dim / 2;
      // Blue to red
      let h = p.random(210, 260);
      for (let r = radius; r > 0; --r) {
        p.fill(h, 90, 90);
        p.ellipse(x, y, r, r);
        h = (h + 1) % 360;
      }
    }
  };
}

function AnimationBlueElement(props) {
  // create a reference to the container in which the p5 instance should place the canvas
  const p5ContainerRef = useRef();

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return(
      <span className={classes.item} ref={p5ContainerRef} />
  );
}

export default AnimationBlueElement;

/*
import { useEffect, useRef } from "react";
import p5 from "p5";

import classes from "./Animation.module.css";

let dim;

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    p.createCanvas(window.innerWidth, 240); //(width,height)
    dim = p.width / 3;
    p.background(0);
    p.colorMode(p.HSB, 360, 100, 100);
    p.noStroke();
    p.ellipseMode(p.RADIUS);
    p.frameRate(1);
  };

  p.draw = function () {
    // your draw code here
    let y = p.height / 2;

    p.background(0);
    for (let x = 0; x <= p.width; x += dim) {
      let radius = dim / 2;
      let h = p.random(0, 360);
      for (let r = radius; r > 0; --r) {
        p.fill(h, h, h);
        p.ellipse(x, y, r, r);
        h = (h + 1) % 360;
      }
    }
  };
}

function AnimationElement(props) {
  // create a reference to the container in which the p5 instance should place the canvas
  const p5ContainerRef = useRef();

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return(
      <div className={classes.item} ref={p5ContainerRef} />
  );
}

export default AnimationElement;
*/