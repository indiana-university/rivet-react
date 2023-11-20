import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { TestUtils } from "../../util/TestUtils.js";
import { Timeline, TimelineItem } from "../index.jsx";

describe("<Timeline />", () => {
  describe("Rendering", () => {
    it("should render without throwing an error", () => {
      const id = "the_id";
      const idAnother = "the_id_another";
      const timelineItemBody =
        "Before you start, you may want to make a list of all your senior year classes and high school extracurricular activities, so you’re ready to enter those in your application. Also consider whether you want to include your SAT and/or ACT test scores in your application.";

      render(
        <Timeline id={id}>
          <TimelineItem
            id={idAnother}
            header="Organize your info"
            date="Spring 2022"
          >
            <p>{timelineItemBody}</p>
          </TimelineItem>
          <TimelineItem header="Pick your campus" date="Summer 2022">
            <p>
              You can apply to any IU campus using the Apply IU app, which will
              ask you to select which IU campus(es) you want to send your
              application to. You can choose as many as you like, and you’ll
              only pay one application fee based on where you apply.
            </p>
          </TimelineItem>
        </Timeline>
      );
      const timeline = screen.queryByTestId(TestUtils.Timeline.testId, {});
      expect(timeline).toBeVisible();
      expect(timeline).toHaveClass("rvt-timeline");
      expect(timeline).toHaveProperty("id", id);
      expect(timeline).not.toHaveAttribute("rvt-timeline--left");
      expect(timeline.children.length).toBe(2);
      const timelineItem = timeline.children[0];
      expect(timelineItem).toHaveClass("rvt-timeline__item");
      expect(timelineItem).toHaveProperty("id", idAnother);
      expect(timelineItem.children.length).toBe(2);
      const marker = timelineItem.children[0];
      expect(marker).toHaveClass("rvt-timeline__marker");
      expect(marker).toHaveAttribute("aria-hidden", "true");
      const content = timelineItem.children[1];
      expect(content).toHaveClass("rvt-timeline__content");
      expect(content.children.length).toBe(3);
      const heading = content.children[0];
      expect(heading).toHaveClass("rvt-timeline__heading");
      const date = content.children[1];
      expect(date).toHaveClass("rvt-timeline__date");
      const body = content.children[2];
      expect(body).toHaveTextContent(timelineItemBody);
    });

    it("should render with center alignment", () => {
      render(
        <Timeline align="center">
          <TimelineItem header="Organize your info" date="Spring 2022">
            <p>
              Before you start, you may want to make a list of all your senior
              year classes and high school extracurricular activities, so you’re
              ready to enter those in your application. Also consider whether
              you want to include your SAT and/or ACT test scores in your
              application.
            </p>
          </TimelineItem>
          <TimelineItem
            align="right"
            header="Pick your campus"
            date="Summer 2022"
          >
            <p>
              You can apply to any IU campus using the Apply IU app, which will
              ask you to select which IU campus(es) you want to send your
              application to. You can choose as many as you like, and you’ll
              only pay one application fee based on where you apply.
            </p>
          </TimelineItem>
        </Timeline>
      );
      const timeline = screen.queryByTestId(TestUtils.Timeline.testId, {});
      expect(timeline).toHaveClass("rvt-timeline--center");
      const timelineRow = timeline.children[1];
      expect(timelineRow).toHaveClass("rvt-timeline__row");
      const timelineItem = timelineRow.children[0];
      expect(timelineItem).toHaveClass("rvt-timeline__item--right");
    });

    it("should render with right alignment", () => {
      render(
        <Timeline align="right">
          <TimelineItem header="Organize your info" date="Spring 2022">
            <p>
              Before you start, you may want to make a list of all your senior
              year classes and high school extracurricular activities, so you’re
              ready to enter those in your application. Also consider whether
              you want to include your SAT and/or ACT test scores in your
              application.
            </p>
          </TimelineItem>
        </Timeline>
      );
      const timeline = screen.queryByTestId(TestUtils.Timeline.testId, {});
      expect(timeline).toHaveClass("rvt-timeline--right");
    });

    it("should render item with date as label", () => {
      render(
        <Timeline>
          <TimelineItem date="Spring 2022" dateStyleAsLabel={true}>
            <p>
              Before you start, you may want to make a list of all your senior
              year classes and high school extracurricular activities, so you’re
              ready to enter those in your application. Also consider whether
              you want to include your SAT and/or ACT test scores in your
              application.
            </p>
          </TimelineItem>
        </Timeline>
      );
      const timeline = screen.queryByTestId(TestUtils.Timeline.testId, {});
      const timelineItem = timeline.children[0];
      const content = timelineItem.children[1];
      const heading = content.children[0];
      expect(heading).toHaveClass("rvt-timeline__date--label");
    });
  });
});
