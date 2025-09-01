import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/f_yeoju3/'  // ✅ 새 프로젝트 레포 이름으로 변경
})
