import { TestPhase } from "@/utils/types";
import { atom } from "jotai";

export const testPhaseAtom = atom<TestPhase>(`idle`);
