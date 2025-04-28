import {renderHook, act, waitFor, render, cleanup } from '@testing-library/react';
import {describe, expect, it, vi, afterEach} from 'vitest'
import * as React from 'react'

globalThis.renderHook = renderHook;
globalThis.act = act;
globalThis.waitFor = waitFor;
globalThis.render = render;
globalThis.cleanup = cleanup;