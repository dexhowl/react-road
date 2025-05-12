/* globals describe expect waitFor afterEach vi it renderHook act*/
import useListReducer from "../src/hooks/useListReducer";
import axios from "axios";

vi.mock("axios");

describe("useListReducer Hook", () => { 
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const mockedStories = {
    data: {
      hits: [
        { id: "15", title: "Open Runescape Classic" },
        { id: "17", title: "Open-Source RuneScape Client - RuneLite" },
      ],
    },
  };

  it("Removes a Story", async () => { 
    axios.get.mockResolvedValue(mockedStories);

    const url = "http://hn.algolia.com/api/v1/search?query=Runescape";
    const { result } = renderHook(() =>
      useListReducer(url, { data: [], isLoading: false, isError: false })
    );

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0].data).toStrictEqual(mockedStories.data.hits);

    act(() => {
      result.current[1]({
        type: "REMOVE_ITEM",
        payload: mockedStories.data.hits[0],
      });
    });

    expect(result.current[0].isError).toStrictEqual(false);
    expect(result.current[0].data).toHaveLength(1);
    expect(result.current[0].data).toStrictEqual([
      { id: "17", title: "Open-Source RuneScape Client - RuneLite" },
    ]);
  });

  it("Has Loading State", async () => {
    axios.get.mockResolvedValue(mockedStories);

    const url = "http://hn.algolia.com/api/v1/search?query=Runescape";
    const { result } = renderHook(() =>
      useListReducer(url, { data: [], isLoading: false, isError: false })
    );

    act(() => {
      result.current[1]({ type: "FETCH_INIT", payload: mockedStories.data[0] });
    });
    expect(result.current[0].isLoading).toBe(true);
    expect(result.current[0].data).toStrictEqual([]);

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      "http://hn.algolia.com/api/v1/search?query=Runescape"
    );
    expect(result.current[0].isError).toBe(false);
  });

  it("Has Error State", async () => {
    axios.get.mockRejectedValue(new Error("Unable to Reach API"));

    const url = "http://hn.algolia.com/api/v1/search?query=Runescape";
    const { result } = renderHook(() =>
      useListReducer(url, { data: [], isLoading: false, isError: false })
    );

    act(() => {
      result.current[1]({ type: "FETCH_INIT" });
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      "http://hn.algolia.com/api/v1/search?query=Runescape"
    );

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0].isError).toBe(true);
    expect(result.current[0].data).toStrictEqual([]);
  });

  it("Has Success State", async () => {
    axios.get.mockResolvedValue(mockedStories);

    const url = "http://hn.algolia.com/api/v1/search?query=Runescape";
    const { result } = renderHook(() =>
      useListReducer(url, { data: [], isLoading: false, isError: false })
    );

    act(() => {
      result.current[1]({
        type: "FETCH_INIT",
        payload: mockedStories.data.hits,
      });
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      "http://hn.algolia.com/api/v1/search?query=Runescape"
    );

    await waitFor(() => {
      expect(result.current[0].isLoading).toBe(false);
    });

    expect(result.current[0].isError).toStrictEqual(false);
    expect(result.current[0].data).toStrictEqual([
      { id: "15", title: "Open Runescape Classic" },
      { id: "17", title: "Open-Source RuneScape Client - RuneLite" },
    ]);
  });
});
