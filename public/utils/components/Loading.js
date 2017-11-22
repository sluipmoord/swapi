import React from 'react'
import { Progress } from 'reactstrap'

export default ({ title = 'Loading' }) => <div>
  <h3> { title } </h3>
  <Progress animated color="info" value={100} />
</div>
