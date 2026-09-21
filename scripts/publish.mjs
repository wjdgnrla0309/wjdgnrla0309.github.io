import { copyFile, cp, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const output = resolve(root, 'dist')

await copyFile(resolve(output, 'index.vite.html'), resolve(root, 'index.html'))
await mkdir(resolve(root, 'assets'), { recursive: true })
await cp(resolve(output, 'assets'), resolve(root, 'assets'), { recursive: true })
await cp(resolve(root, 'public'), root, { recursive: true })

console.log('Published dist output to the GitHub Pages root.')
