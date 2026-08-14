import { describe, expect, it, vi } from "vitest";
import { processData } from "./processData";

describe("processData", () => {
  it("logs a message when data is a string", () => {
    const logger = vi.fn();
    const onError = (msg: string): never => {
      throw new Error(msg);
    };

    processData("Hello", onError, logger);

    expect(logger).toHaveBeenCalledWith("Received a string: Hello");
  });

  it("logs a message when data is a number", () => {
    const logger = vi.fn();
    const onError = (msg: string): never => {
      throw new Error(msg);
    };

    processData(42, onError, logger);

    expect(logger).toHaveBeenCalledWith("Received a number: 42");
  });

  it("calls onError when data is null", () => {
    const logger = vi.fn();
    const onErrorMock = vi.fn();

    const onError = (msg: string): never => {
      onErrorMock(msg);
      throw new Error(msg);
    };

    expect(() => {
      processData(null, onError, logger);
    }).toThrow("Received null, but expected data");

    expect(onErrorMock).toHaveBeenCalledWith(
      "Received null, but expected data",
    );
  });

  it("logs object keys when data is an object", () => {
    const logger = vi.fn();
    const onError = (msg: string): never => {
      throw new Error(msg);
    };

    processData({ name: "Alice", age: 30 }, onError, logger);

    expect(logger).toHaveBeenCalledWith(
      "Received an object with keys: name, age",
    );
  });
});
