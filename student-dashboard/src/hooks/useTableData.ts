import { useEffect, useState } from "react"
import useStudentRecords from "./useStudentRecord"


const useTableData = () => {
      const {data} = useStudentRecords("studentData")
      const [tableData, setTableData] = useState([...data])
       
      useEffect(() =>   
      {
          setTableData(data)
      }, [data])


      return {tableData, setTableData}
}




export default useTableData