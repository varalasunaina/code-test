import React from "react";
import "./Blurbs.css";

const Blurbs = () => {
  return (
    <section>
      <h4 className="title-header">Sunaina's Blurbs</h4>
      <h5 className="sub-heading">About Me</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </p>

      <p>
        {" "}
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.{" "}
      </p>
      <p>
        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
        in 45 BC. This book is a treatise on the theory of ethics, very popular
        during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
        dolor sit amet..", comes from a line in section 1.10.32. 
      </p>
      <h5 className="sub-heading">Who I'd like to meet</h5>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to usin
      </p>
    </section>
  );
};

export default Blurbs;
