let complaints = [
    {
        "id":1,
        "title":"complaint1",
        "description":"NO waste disposal management",
        "status":"open"
    }
];

let id_count = 1;
export const getComplaint = (req, res)=>{
    res.json(complaints);
};

export const createComplaint = (req, res)=>{
    const { title, description} = req.body;

    const newComplaint = {
        id: ++id_count,
        title,
        description,
        status: "open" 
    };
    
    complaints.push(newComplaint);
    res.status(201).json(newComplaint);
};

export const resolveComplaint = (req, res) =>{
    const id = Number(req.params.id);
    const complaint = complaints.find(c => c.id === id);

    if(!complaint){
        res.status(404).json({message: "Complaint not found"});
    }

    complaint.status = "resolved";
    res.json(complaint);
};


export const deleteComplaint = (req, res) =>{
    const id = Number(req.params.id);
    complaints = complaints.filter(c => c.id !== id);

    res.json({message: "Complaint Deleted Successfully!!"});
};

