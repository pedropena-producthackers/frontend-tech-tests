'use server';
// import { z } from 'zod';

export type FormState = {
  success: boolean;
  errors?: { name?: string[]; email?: string[] };
};

// TODO:
//   1. Schema Zod: name (min 2), email (válido).
//   2. subscribeAction(prevState, formData):
//        - safeParse
//        - fail → { success: false, errors: {...} }
//        - ok   → { success: true }
