import React, { Component } from "react";
import { Row, Col, Typography, Card, Button } from "antd";
import { Link } from "react-router-dom";
import YouTube from "@u-wave/react-youtube";
import { Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const { Title } = Typography;

class Course extends Component {
  state = {
    units: [
      {
        title: "What is JS?",
        type: "video",
        content: "PkZNo7MFNFg",
        quiz: "iiiidddd",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet odit aliquid quos, aspernatur nisi tempore optio, illum est ipsam, perspiciatis explicabo? Illo ullam autem, mollitia quibusdam voluptatum dolorem necessitatibus."
      },
      {
        title: "Variables",
        type: "video",
        content: "PkZNo7MFNFg",
        quiz: "iiiidddd",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet odit aliquid quos, aspernatur nisi tempore optio, illum est ipsam, perspiciatis explicabo? Illo ullam autem, mollitia quibusdam voluptatum dolorem necessitatibus."
      },
      {
        title: "Objects",
        type: "pdf",
        content:
          "https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-chen.pdf",
        quiz: "iiiidddd",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eveniet odit aliquid quos, aspernatur nisi tempore optio, illum est ipsam, perspiciatis explicabo? Illo ullam autem, mollitia quibusdam voluptatum dolorem necessitatibus."
      }
    ]
  };

  renderUnit = ({ title, type, content, description }) => {
    const titleElm = (
      <div>
        <span style={{ float: "left" }}>{title}</span>
        <span style={{ float: "right" }}>
          <Button icon="experiment">
            <Link to="/courses/id/quiz/id">Take Quiz</Link>
          </Button>
        </span>
      </div>
    );
    return (
      <Row key={title} style={{ margin: "16px" }}>
        <Col span={20}>
          <Card title={titleElm}>
            <Row>
              <Col span={24}>
                {type === "video" && (
                  <YouTube width={"100%"} height={"600px"} video={content} />
                )}
                {type === "pdf" && <Document file={content} />}
              </Col>
              <Col span={24}>
                <p style={{ padding: "8px", textAlign: "left" }}>
                  {description}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <div className="course">
        <Row>
          <Col span={24}>
            <Row type="flex" justify="space-between">
              <Col span={12}>
                <Title level={2}>JavaScript</Title>
              </Col>
              <Col span={12}>
                <Button
                  style={{ float: "right" }}
                  type="primary"
                  size="large"
                  icon="experiment"
                >
                  Take Final Quiz
                </Button>
              </Col>
            </Row>
            {this.state.units.map(this.renderUnit)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Course;
