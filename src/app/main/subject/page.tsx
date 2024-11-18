import React from 'react'
import { Card } from "antd"
import SubjectTable from '@/components/subject/SubjectTable'

const Subject = () => {
  return (
    <Card>
      <h1 className="text-3xl font-semibold mb-4">Pelajaran</h1>
      <SubjectTable/>
    </Card>
  )
}

export default Subject