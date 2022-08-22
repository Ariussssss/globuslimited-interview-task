import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import { ViteAliases } from 'vite-aliases'
import reactJsx from 'vite-react-jsx'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    ViteAliases({}),
    reactJsx(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          esModule: true,
          style: (name) => {
            return `antd/es/${name}/style/index`
          },
        },
      ],
    }),
  ],
})
