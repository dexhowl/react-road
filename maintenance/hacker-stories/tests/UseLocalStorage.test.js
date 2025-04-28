/* globals describe afterEach vi it renderHook act*/

import { expect } from "vitest";
import useLocalStorageState from "../src/hooks/useLocalStorageState";

describe("useLocalStorage Hook", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  const state = "search"
  const defaultState = "RuneScape"

  it("Retrieves from local storage", () => {
    const getItemSpy = vi.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
        if (key === state) {
            return defaultState;
        }
        return null
    })
    const { result } = renderHook(() => useLocalStorageState(state, defaultState));

    expect(getItemSpy).toHaveBeenCalledExactlyOnceWith("search");
    expect(getItemSpy).toHaveReturnedWith("RuneScape")

    expect(result.current[0]).toStrictEqual("RuneScape");
  });

  it("Saves to local storage", () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {});
    
    const { result } = renderHook(() => useLocalStorageState(state, defaultState)); 

    act(() => {
        result.current[1]('Tesla');
    
    });
    expect(setItemSpy).toHaveBeenCalledTimes(2);
    expect(setItemSpy).toHaveBeenCalledWith("search", "Tesla")

    expect(result.current[0]).toStrictEqual("Tesla");
  });


});
