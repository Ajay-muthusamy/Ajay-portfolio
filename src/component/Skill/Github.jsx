import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <section className="text-white   font-sans  m-3">
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="w-full">
      <h1 className="text-center py-10 text-4xl">Day I  <span className="text-[#B968C7] ">Code</span> </h1>
      <GitHubCalendar className='text-white'
        username="Ajay-muthusamy"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
    </section>
  );
}

export default Github;