import { Locator } from '@playwright/test'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

export const normalUserStorageStatePath = 'temps/normal.json'
export const premiumUserStorageStatePath = 'temps/premium.json'

export const getTestData = (fileName: string) => {
  const environment = process.env.RUN_ENVIRONMENT
  fileName = fileName.indexOf('.') !== -1 ? fileName : `${fileName}.json`

  const filePath = resolve('constants', `${environment}`, fileName)
  if (existsSync(filePath)) {
    return JSON.parse(readFileSync(filePath, 'utf-8'))
  }
  return null
}

export async function locatorExists(locator: Locator, timeout = 3000): Promise<boolean> {
  // This method may misjudge the presence of a person when the element decreases to the point of disappearance, and can currently only be solved by waiting for some time.

  const __locatorExists = async (__locator: Locator) =>
    !((await __locator.waitFor({ timeout: timeout }).catch((e: Error) => e)) instanceof Error)
  const exists = await __locatorExists(locator)

  return exists
}

export async function locatorLength(locator: Locator, timeout = 1000): Promise<number> {
  if (await locatorExists(locator, timeout)) {
    return await locator.count()
  }

  return 0
}

export async function delay(timeout) {
  await new Promise((resolve) => setTimeout(resolve, timeout))
}

