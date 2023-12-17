// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    repo: { type: 'string', required: true},
    demo: { type: 'string', required: false},
    toolbox: { type: 'list', of: { type: 'string' }, required: false}
  },
  computedFields: {
    url: { type: 'string', resolve: (project) => `/projects/${project.repo}` },
  },
}))

export default makeSource({ contentDirPath: 'projects', documentTypes: [Project] })