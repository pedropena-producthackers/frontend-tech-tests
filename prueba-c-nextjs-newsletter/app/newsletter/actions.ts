'use server';
// import { z } from 'zod';

// TODO:
//   1. Schema Zod: name (min 2), email (válido)
//   2. export async function subscribeAction(prevState, formData) {
//        - validar con safeParse
//        - fail → { success: false, errors: { name?: string[], email?: string[] } }
//        - ok   → { success: true }
//      }

export type FormState = {
  success: boolean;
  errors?: { name?: string[]; email?: string[] };
};
