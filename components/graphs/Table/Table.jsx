import { DataGrid } from "@mui/x-data-grid";
import { useData } from "@/context/dataContext";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const columns = [
	{ field: "id", headerName: "ID", type: "number", width: 30 },
	{ field: "date_created", headerName: "Date Created", width: 150 },
    {
        field: "enrollment_coach",
        headerName: "Enrollment Coach",
        width: 150,
    },
    {
        field: 'fireflies_keywords',
        headerName: 'Fireflies Keywords',
        width: 525,
        renderCell: (params) => (
            <Box display="flex" flexWrap="wrap" gap={1}>
                {params.value.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                ))}
            </Box>
        )
    },
	{
		field: "time_availability",
		headerName: "Availability",
		type: "boolean",
		width: 130,
		valueGetter: (params) =>
			params.row.ec_checklist.time_availability,
	},
	{
		field: "commitment_readiness",
		headerName: "Commitment",
		type: "boolean",
		width: 130,
		valueGetter: (params) =>
			params.row.ec_checklist.commitment_readiness,
	},
	{
		field: "why_join",
		headerName: "Why",
		type: "boolean",
		width: 70,
		valueGetter: (params) => params.row.ec_checklist.why_join,
	},
    {
        field: 'view_details',
        headerName: "View Details",
        width: 160,
        renderCell: (params) => (
            <Button variant="contained" color="primary" onClick={() => params.api/getRowEl(params.id)}>View Details</Button>
        )
    }
];

export default function DataTable() {
	const data = useData();
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpen = (row) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				margin: "50px",
			}}
		>
			{data && (
				<div style={{ height: 631, width: "90%" }}>
					<DataGrid
						rows={data}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel:
									{
										page: 0,
										pageSize: 10,
									},
							},
						}}
						pageSizeOptions={[5, 10]}
						onRowClick={(rowParams => handleOpen(rowParams.row))}
					/>
				</div>
			)}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ width: 400, height: 200, p: 2, bgcolor: 'background.paper', margin: 'auto' }}>
                    {selectedRow &&
                        <div>
                            <h2>Details for enrollment call | {selectedRow.date_created}</h2>
                            <p>ID: {selectedRow.id}</p>
                            <p>Transcript: {selectedRow.transcript}</p>
                        </div>
                    }
                </Box>
            </Modal>
		</div>
	);
}
