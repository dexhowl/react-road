import {renderHook, act, waitFor, render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers'
import {describe, expect, it, vi, afterEach} from 'vitest'
import * as React from 'react'

expect.extend(matchers);

afterEach(() => {
    cleanup();
}); 

globalThis.renderHook = renderHook;
globalThis.fireEvent = fireEvent;
globalThis.waitFor = waitFor;
globalThis.cleanup = cleanup;
globalThis.screen = screen;
globalThis.render = render;
globalThis.act = act;