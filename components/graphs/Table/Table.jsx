import { DataGrid } from '@mui/x-data-grid'
import { useData } from '@/context/dataContext';

const columns = [
    { field: 'id', headerName: 'ID', type: 'number', width: 30 },
    { field: 'date_created', headerName: 'Date Created', width: 150 },
    { field: 'enrollment_coach', headerName: 'Enrollment Coach', width: 150 },
    { field: 'transcript', headerName: 'Transcript', width: 300 },
    { field: 'fireflies_summary', headerName: 'Fireflies Summary', width: 300 },
    {
        field: 'time_availability',
        headerName: 'Availability',
        type: 'boolean',
        width: 130,
        valueGetter: (params) => params.row.ec_checklist.time_availability
    },
    {
        field: 'commitment_readiness',
        headerName: 'Commitment',
        type: 'boolean',
        width: 130,
        valueGetter: (params) => params.row.ec_checklist.commitment_readiness
    },
    {
        field: 'why_join',
        headerName: 'Why',
        type: 'boolean',
        width: 70,
        valueGetter: (params) => params.row.ec_checklist.why_join
    },
]

  export default function DataTable() {
    const data = useData()
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
            {
                data && <div style={{ height: 631, width: '90%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            }
        </div>
    )
  }