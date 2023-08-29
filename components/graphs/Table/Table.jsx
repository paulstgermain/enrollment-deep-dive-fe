import { DataGrid } from "@mui/x-data-grid";
import { useData } from "@/context/dataContext";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from "@mui/material/Typography";
import LandingCard from "@/components/layout/LandingCard";

export default function DataTable() {
	const { state } = useData();
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpen = (row) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: "id", headerName: "ID", type: "number", width: 30 },
        { 
            field: "date_created",
            headerName: "Date Created",
            width: 150,
            valueGetter: (params) => {return params.row.date_created.slice(0, 10)}
        },
        {
            field: "enrollment_coach", headerName: "Enrollment Coach", width: 150,
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
                <Button variant="contained" color="primary" onClick={() => handleOpen(params.row)}>View Details</Button>
            )
        }
    ];

    console.log(state);

	return (
		<div
			style={{
				display: "flex",
                flexDirection: 'column',
				justifyContent: "center",
				margin: "50px",
			}}
		>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <LandingCard header="Calls on Record" number={state.totalCalls} />
            </div>
			{state.data && (
				<div style={{ height: 'auto', width: "auto" }}>
					<DataGrid
						rows={state.data}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel:
									{
										page: 0,
										pageSize: 5,
									},
							},
						}}
					/>
				</div>
			)}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ width: '60%', height: '70%', p: 2, bgcolor: 'background.paper', margin: 'auto', marginTop: '60px' }}>
                    {selectedRow &&
                        <div>
                            <h2>Details for enrollment call: {selectedRow.date_created.slice(0, 10)}</h2>
                            <h3>EC: {selectedRow.enrollment_coach}</h3>
                            <p><b>Summary:</b> {selectedRow.fireflies_summary}</p>
                            <div style={{ display: 'flex' }}>
                                <p style={{ marginTop: '-1px', marginRight: '5px', fontWeight: 'bold' }}>Keywords: </p>
                                {selectedRow.fireflies_keywords.map((i) => {
                                    return <Chip key={i} label={i} size="small" />
                                })}
                            </div>
                            <p><b>Transcript:</b> {selectedRow.transcript}</p>
                            <p><b>Questions from lead:</b> {selectedRow.questions_from_lead.map((i) => {
                                return <p key={i} style={{marginLeft: '15px'}}>{i}</p>
                            })}</p>
                            <p style={{fontWeight: 'bold'}}>
                                EC Checklist:
                                <Tooltip title="Green = Question asked / Red = Question missed">
                                    <HelpIcon fontSize="small" />
                                </Tooltip>
                            </p>
                            <div>
                                {
                                    selectedRow.ec_checklist.time_availability === true ? <Chip sx={{marginLeft: '5px'}} label="Availability" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Availability" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.commitment_readiness === true ? <Chip sx={{marginLeft: '5px'}} label="Commitment" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Commitment" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.why_join === true ? <Chip sx={{marginLeft: '5px'}} label="Why Join" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Why Join" color="error" />
                                }
                            </div>
                        </div>
                    }
                </Box>
            </Modal>
		</div>
	);
}
