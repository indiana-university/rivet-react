/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import React from "react";
import RivetTestComponent from "./RivetTestComponent";
import * as Rivet from './Rivet';

describe("Rivetize", () => {
  const titleText = "A Test Component";

  describe("alignContent", alignContentTests);
  describe("alignItems", alignItemsTests);
  describe("alignSelf", alignSelfTests);
  describe("bg", bgTests);
  describe("border", borderTests);
  describe("borderColor", borderColorTests);
  describe("color", colorTests);
  describe("display", displayTests);
  describe("flex", flexTests);
  describe("flexDirection",flexDirectionTests);
  describe("flow", flowTests);
  describe("grow", growTests);
  describe("shrink", shrinkTests);
  describe("fontFamily", fontFamilyTests);
  describe("hide", hideTests);
  describe("justifyContent", justifyContentTests);
  describe("lhTitle", lhTitleTests);
  describe("margin", marginTests);
  describe("padding", paddingTests);
  describe("prose", proseTests);
  describe("shadow", shadowTests);
  describe("stopBreak", stopBreakTests);
  describe("textAlign", textAlignTests);
  describe("typescale", typescaleTests);
  describe("uppercase", uppercaseTests);
  describe("weight", weightTests);
  describe("width", widthTests);
  describe("z", zTests);
});

function alignContentTests () {
    const valid = [
        {
            values: "start",
            expected: "rvt-content-start"
        },
        {
            values: "end",
            expected: "rvt-content-end"
        },
        {
            values: "center-lg-up",
            expected: "rvt-content-center-lg-up"
        },
        {
            values: ['end-lg-up', 'center'],
            expected: "rvt-content-end-lg-up rvt-content-center"
        },
        {
            values: ['end-lg-up', 'bad', 'center'],
            expected: "rvt-content-end-lg-up rvt-content-center"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("alignContent", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent alignContent={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent alignContent={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function alignItemsTests () {
    const valid = [
        {
            values: "start",
            expected: "rvt-items-start"
        },
        {
            values: "end",
            expected: "rvt-items-end"
        },
        {
            values: "center-lg-up",
            expected: "rvt-items-center-lg-up"
        },
        {
            values: ['end-lg-up', 'center'],
            expected: "rvt-items-end-lg-up rvt-items-center"
        },
        {
            values: ['end-lg-up', 'bad', 'center'],
            expected: "rvt-items-end-lg-up rvt-items-center"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("alignItems", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent alignItems={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent alignItems={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function alignSelfTests () {
    const valid = [
        {
            values: "self-start",
            expected: "rvt-self-start"
        },
        {
            values: "self-end",
            expected: "rvt-self-end"
        },
        {
            values: "self-end-lg-up",
            expected: "rvt-self-end-lg-up"
        },
        {
            values: ['self-end-lg-up', 'center-end'],
            expected: "rvt-self-end-lg-up rvt-center-end"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("alignItems", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent alignSelf={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent alignSelf={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function bgTests () {
    const valid = [
        {
            values: "blue",
            expected: "rvt-bg-blue"
        },
        {
            values: "blue-000",
            expected: "rvt-bg-blue-000"
        },
        {
            values: "blue-700",
            expected: "rvt-bg-blue-700"
        },
        {
            values: "crimson",
            expected: "rvt-bg-crimson"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("bg", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent bg={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent bg={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function borderTests () {
    const valid = [
        {
            values: "top",
            expected: "rvt-border-top"
        },
        {
            values: "right",
            expected: "rvt-border-right"
        },
        {
            values: "-right",
            expected: "rvt-border-right-none"
        },
        {
            values: "all",
            expected: "rvt-border-all"
        },
        {
            values: "radius",
            expected: "rvt-border-all rvt-border-radius"
        },
        {
            values: ["top", "bottom"],
            expected: "rvt-border-top rvt-border-bottom"
        }
        ,
        {
            values: ["top", "Bad", "bottom"],
            expected: "rvt-border-top rvt-border-bottom"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("bg", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent border={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent border={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function borderColorTests () {
    const valid = [
        {
            values: "blue",
            expected: "rvt-border-color-blue"
        },
        {
            values: "green",
            expected: "rvt-border-color-green"
        },
        {
            values: "crimson",
            expected: "rvt-border-color-crimson"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("bg", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent borderColor={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent borderColor={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function colorTests () {
    const valid = [
        {
            values: "blue",
            expected: "rvt-color-blue"
        },
        {
            values: "blue-000",
            expected: "rvt-color-blue-000"
        },
        {
            values: "blue-700",
            expected: "rvt-color-blue-700"
        },
        {
            values: "crimson",
            expected: "rvt-color-crimson"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("bg", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent color={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent color={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function displayTests () {
    const valid = [
        {
            values: "block",
            expected: "rvt-display-block"
        },
        {
            values: "inline",
            expected: "rvt-display-inline"
        },
        {
            values: "none",
            expected: "rvt-display-none"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("bg", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent display={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent display={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function flexTests () {
    const valid = [
        {
            values: "normal",
            expected: "rvt-flex"
        },
        {
            values: "inline",
            expected: "rvt-inline-flex"
        },
        {
            values: "inline-lg-up",
            expected: "rvt-inline-flex-lg-up"
        },
        {
            values: ['inline-lg-up', 'normal'],
            expected: "rvt-inline-flex-lg-up rvt-flex"
        },
        {
            values: ['inline-lg-up', 'bad', 'normal'],
            expected: "rvt-inline-flex-lg-up rvt-flex"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("alignItems", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent flex={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent flex={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function flexDirectionTests () {
    const valid = [
        {
            values: "row",
            expected: "rvt-flex-row"
        },
        {
            values: "row-reverse",
            expected: "rvt-flex-row-reverse"
        },
        {
            values: "column-lg-up",
            expected: "rvt-flex-column-lg-up"
        },
        {
            values: ['row-lg-up', 'column'],
            expected: "rvt-flex-row-lg-up rvt-flex-column"
        },
        {
            values: ['row-lg-up', 'bad', 'column'],
            expected: "rvt-flex-row-lg-up rvt-flex-column"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("alignItems", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent flexDirection={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent flexDirection={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function flexWrapTests () {
    const valid = [
        {
            values: "wrap",
            expected: "rvt-wrap"
        },
        {
            values: "no-wrap",
            expected: "rvt-no-wrap"
        },
        {
            values: "wrap-lg-up",
            expected: "rvt-wrap-lg-up"
        },
        {
            values: ['wrap-lg-up', 'no-wrap'],
            expected: "rvt-wrap-lg-up rvt-no-wrap"
        },
        {
            values: ['wrap-lg-up', 'bad', 'no-wrap'],
            expected: "rvt-wrap-lg-up rvt-no-wrap"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("alignItems", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent flexWrap={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent flexWrap={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function flowTests () {
    describe("flow", () => {
        it("should specify style", () => {
            render(<RivetTestComponent flow />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-flow");
        });
        it("should specify style", () => {
            render(<RivetTestComponent flow="true" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-flow");
        });
        it("should specify style", () => {
            render(<RivetTestComponent flow="TRUE" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-flow");
        });
        it("should specify style", () => {
            render(<RivetTestComponent flow="false" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-flow");
        });
        it("should specify style", () => {
            render(<RivetTestComponent flow="FALSE" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-flow");
        });
        it("should specify style", () => {
            render(<RivetTestComponent />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-flow");
        });
    });
}

function growTests () {
    const valid = [
        {
            values: "0",
            expected: "rvt-grow-0"
        },
        {
            values: "1",
            expected: "rvt-grow-1"
        },
        {
            values: 1,
            expected: "rvt-grow-1"
        },
        {
            values: "0-lg-up",
            expected: "rvt-grow-0-lg-up"
        },
        {
            values: ['1-lg-up', '0'],
            expected: "rvt-grow-1-lg-up rvt-grow-0"
        },
        {
            values: ['1-lg-up', 'bad', '0'],
            expected: "rvt-grow-1-lg-up rvt-grow-0"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("grow", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent grow={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent grow={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function shrinkTests () {
    const valid = [
        {
            values: "0",
            expected: "rvt-shrink-0"
        },
        {
            values: "1",
            expected: "rvt-shrink-1"
        },
        {
            values: 1,
            expected: "rvt-shrink-1"
        },
        {
            values: "1-lg-up",
            expected: "rvt-shrink-1-lg-up"
        },
        {
            values: ['1-lg-up', '0'],
            expected: "rvt-shrink-1-lg-up rvt-shrink-0"
        },
        {
            values: ['1-lg-up', 'bad', '0'],
            expected: "rvt-shrink-1-lg-up rvt-shrink-0"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("shrink", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent shrink={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent shrink={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function fontFamilyTests () {
    const valid = [
        {
            values: "sans",
            expected: "rvt-font-sans"
        },
        {
            values: "serif",
            expected: "rvt-font-serif"
        },
        {
            values: "mono",
            expected: "rvt-font-mono"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("fontFamily", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent fontFamily={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent fontFamily={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function hideTests () {
    const valid = [
        {
            values: "sr",
            expected: "rvt-sr-only"
        },
        {
            values: "all",
            expected: "rvt-display-none"
        },
        {
            values: "lg-up",
            expected: "rvt-hide-lg-up"
        },
        {
            values: "md-down",
            expected: "rvt-hide-md-down"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("hide", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent hide={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent hide={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function justifyContentTests () {
    const valid = [
        {
            values: "start",
            expected: "rvt-justify-start"
        },
        {
            values: "end",
            expected: "rvt-justify-end"
        },
        {
            values: "center-lg-up",
            expected: "rvt-justify-center-lg-up"
        },
        {
            values: ['end-lg-up', 'center'],
            expected: "rvt-justify-end-lg-up rvt-justify-center"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("justifyContent", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent justifyContent={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent justifyContent={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function lhTitleTests () {
    describe("lhTitle", () => {
        it("should specify style", () => {
            render(<RivetTestComponent lhTitle />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-lh-title");
        });
        it("should specify style", () => {
            render(<RivetTestComponent lhTitle="true" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-lh-title");
        });
        it("should specify style", () => {
            render(<RivetTestComponent lhTitle="TRUE" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-lh-title");
        });
        it("should specify style", () => {
            render(<RivetTestComponent lhTitle="false" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-lh-title");
        });
        it("should specify style", () => {
            render(<RivetTestComponent lhTitle="FALSE" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-lh-title");
        });
        it("should specify style", () => {
            render(<RivetTestComponent />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-lh-title");
        });
    });
}

function marginTests () {
    const valid = [
        {
            values: "self-start",
            expected: "rvt-self-start"
        },
        {
            values: "self-end",
            expected: "rvt-self-end"
        },
        {
            values: "self-end-lg-up",
            expected: "rvt-self-end-lg-up"
        },
        {
            values: ['self-end-lg-up', 'center-end'],
            expected: "rvt-self-end-lg-up rvt-center-end"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("margin", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent margin={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent margin={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function paddingTests () {
    const valid = [
        {
            values: "self-start",
            expected: "rvt-self-start"
        },
        {
            values: "self-end",
            expected: "rvt-self-end"
        },
        {
            values: "self-end-lg-up",
            expected: "rvt-self-end-lg-up"
        },
        {
            values: ['self-end-lg-up', 'center-end'],
            expected: "rvt-self-end-lg-up rvt-center-end"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("padding", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent padding={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent padding={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function proseTests () {
    describe("prose", () => {
        it("should specify style", () => {
            render(<RivetTestComponent prose />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-prose");
        });
        it("should specify style", () => {
            render(<RivetTestComponent prose="true" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-prose");
        });
        it("should specify style", () => {
            render(<RivetTestComponent prose="TRUE" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-prose");
        });
        it("should specify style", () => {
            render(<RivetTestComponent prose="false" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-prose");
        });
        it("should specify style", () => {
            render(<RivetTestComponent prose="FALSE" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-prose");
        });
        it("should specify style", () => {
            render(<RivetTestComponent />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-prose");
        });
    });
}

function shadowTests () {
    const valid = [
        {
            values: "normal",
            expected: "rvt-shadow"
        },
        {
            values: "subtle",
            expected: "rvt-shadow-subtle"
        },
        {
            values: "heavy",
            expected: "rvt-shadow-heavy"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("shadow", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent shadow={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent shadow={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function stopBreakTests () {

    describe("stopBreak", () => {
        it("should specify style", () => {
            render(<RivetTestComponent stopBreak />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-text-nobr");
        });
        it("should specify style", () => {
            render(<RivetTestComponent stopBreak="true" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-text-nobr");
        });
        it("should specify style", () => {
            render(<RivetTestComponent stopBreak="TRUE" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-text-nobr");
        });
        it("should specify style", () => {
            render(<RivetTestComponent stopBreak="false" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-text-nobr");
        });
        it("should specify style", () => {
            render(<RivetTestComponent stopBreak="FALSE" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-text-nobr");
        });
        it("should specify style", () => {
            render(<RivetTestComponent />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-text-nobr");
        });
    });
}

function textAlignTests () {
    const valid = [
        {
            values: "left",
            expected: "rvt-text-left"
        },
        {
            values: "center",
            expected: "rvt-text-center"
        },
        {
            values: "right",
            expected: "rvt-text-right"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("textAlign", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent textAlign={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent textAlign={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function typescaleTests () {
    const valid = [
        {
            values: "sm",
            expected: "rvt-ts-sm"
        },
        {
            values: "lg",
            expected: "rvt-ts-lg"
        },
        {
            values: "26",
            expected: "rvt-ts-26"
        },
        {
            values: 26,
            expected: "rvt-ts-26"
        },
        {
            values: "md-lg-up",
            expected: "rvt-ts-md-lg-up"
        },
        {
            values: ['md-lg-up', 'lg-xxl-up', 'sm'],
            expected: "rvt-ts-md-lg-up rvt-ts-lg-xxl-up rvt-ts-sm"
        },
        {
            values: ['md-lg-up', 'bad', 'lg-xxl-up', 'sm'],
            expected: "rvt-ts-md-lg-up rvt-ts-lg-xxl-up rvt-ts-sm"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("typescale", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent typescale={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent typescale={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function uppercaseTests () {
    describe("uppercase", () => {
        it("should specify style", () => {
            render(<RivetTestComponent uppercase />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-text-uppercase");
        });
        it("should specify style", () => {
            render(<RivetTestComponent uppercase="true" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-text-uppercase");
        });
        it("should specify style", () => {
            render(<RivetTestComponent uppercase="TRUE" />);
            expect(screen.getByTestId("test")).toHaveClass("rvt-text-uppercase");
        });
        it("should specify style", () => {
            render(<RivetTestComponent uppercase="false" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-text-uppercase");
        });
        it("should specify style", () => {
            render(<RivetTestComponent uppercase="FALSE" />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-text-uppercase");
        });
        it("should specify style", () => {
            render(<RivetTestComponent />);
            expect(screen.getByTestId("test")).not.toHaveClass("rvt-text-uppercase");
        });
    });
}

function weightTests () {
    const valid = [
        {
            values: "regular",
            expected: "rvt-text-regular"
        },
        {
            values: "medium",
            expected: "rvt-text-medium"
        },
        {
            values: "bold",
            expected: "rvt-text-bold"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("weight", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent weight={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent weight={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function widthTests () {
    const valid = [
        {
            values: "sm",
            expected: "rvt-width-sm"
        },
        {
            values: "lg",
            expected: "rvt-width-lg"
        },
        {
            values: "4-xl",
            expected: "rvt-width-4-xl"
        },
        {
            values: "md-lg-up",
            expected: "rvt-width-md-lg-up"
        },
        {
            values: ['md-lg-up', 'lg-xxl-up', 'sm'],
            expected: "rvt-width-md-lg-up rvt-width-lg-xxl-up rvt-width-sm"
        },
        {
            values: ['md-lg-up', 'bad', 'lg-xxl-up', 'sm'],
            expected: "rvt-width-md-lg-up rvt-width-lg-xxl-up rvt-width-sm"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("width", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent width={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent width={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}

function zTests () {
    const valid = [
        {
            values: "1",
            expected: "rvt-z-100"
        },
        {
            values: 2,
            expected: "rvt-z-200"
        },
        {
            values: "5",
            expected: "rvt-z-500"
        },
        {
            values: "10",
            expected: "rvt-z-1000"
        }
    ]
    const invalid = ["BAD", null, ""];
    describe("z", () => {
        valid.forEach(test => {
            it("should specify style for: " + test.values, () => {
                render(<RivetTestComponent z={test.values} />);
                expect(screen.getByTestId("test")).toHaveClass(test.expected);
            });
        })
        invalid.forEach(test => {
            it("should specify style for: " + test, () => {
                render(<RivetTestComponent z={test} />);
                expect(screen.getByTestId("test")).not.toHaveClass();
            });
        })
    });
}
