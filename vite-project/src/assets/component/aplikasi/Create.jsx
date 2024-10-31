import React, { useState } from "react";

export default function CreateAplikasi(){
    const [namaAplikasi, setNamaAplikasi]= useState(" ");

    const [error, setError] = useState("");

    const [succes, setSucces] = useState(" ");

    const HandleSubmit = async () => {
        error.preventDefault(); 
        setError(" ") ;
        setSucces(" ");

        if (namaAplikasi.trim()=== "") {
            setError ("nama aplikasi is required");
            return;
    }
    try{
        const response = await axios.post(
            'https://github.com/azizIirawan/UTS-IF3B_2226250114-API',
            {
                nama = namaAplikasi,
            }
        );
    }
    }