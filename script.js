        // --- CONFIGURATION ---
        const KEY_EXCHANGE_URL = "https://devlinkv2.paydee.co/mpigw/mkReq";
        const PAYMENT_REQUEST_URL = "https://devlinkv2.paydee.co/mpigw/mpReq";
        const GET_CHANNEL_URL = "https://devlinkv2.paydee.co/mpigw/channels";
        const PUBLICKEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq8j2SHHfzMLlhYppnlk-QqjjjZwMkhK6s6rERd0JhhY_6-Md4Z0327uEdfNbJrSEPJVPT55gjRhx4MorEhrabuafuY8thSPS4epwkOjjPtELwZxViWe1dzG5TQakJ_i8ZOQuUYFJg02RcwUTzE3ty-x7mkwj9t2wAdRqTagyaDIAVMTxP_Y4AS76xjA3aH43Q0HKHGAxxIlXBIQxImuPhlUbPtVtTHIsUwkIx2BDh8kPZ3Mgr3Cyky0F-cHpEFSi3rPSSLD_FVHlJRW2cODVm8E-s98CURQYs1npzDztzZgZPnnb9K57CB2Z50Ve6qUV7z4-uHs3nehiMJHktIs7LQIDAQAB";
		const VERCEL_CALLBACK_URL = "https://sys-int-nine.vercel.app/api/callback"


        // Initialize form action
        document.getElementById("form").action = PAYMENT_REQUEST_URL;
		
		        // PASTE YOUR PRIVATE KEY HERE (PKCS#8 format)
        const PRIVATE_KEY_PEM = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCryPZIcd/MwuWF
immeWT5CqOONnAySErqzqsRF3QmGFj/r4x3hnTfbu4R181smtIQ8lU9PnmCNGHHg
yisSGtpu5p+5jy2FI9Lh6nCQ6OM+0QvBnFWJZ7V3MblNBqQn+Lxk5C5RgUmDTZFz
BRPMTe3L7HuaTCP23bAB1GpNqDJoMgBUxPE/9jgBLvrGMDdofjdDQcocYDHEiVcE
hDEia4+GVRs+1W1McixTCQjHYEOHyQ9ncyCvcLKTLQX5wekQVKLes9JIsP8VUeUl
FbZw4NWbwT6z3wJRFBizWenMPO3NmBk+edv0rnsIHZnnRV7qpRXvPj64ezed6GIw
keS0izstAgMBAAECggEAC59vu8Fp/S6B8rHwPnoBopH5v3bmSisr6FnD/jQb3695
XgpCVyWuMKxJzzngGh4kRP3B3Xxfl6b77Ckm69/W6qJTqULnjLa6nyAfw0uL4I//
+yFgOjPtomXCCKpL3gvQIgVm9YseqwcgXFy6FQcqxog2vrRVye9Vksdz9SgjAktP
UeTaAgyfHGcKqQvWb8E0N5hpPfQMsw9p5vKdoSyrokb6mTSzMn2K9NlCtXNYvzyp
gmivt5H4wYGHrl+GFJnKfbb0Qv0O3BUaRTbyuUXBwJqWGYIiAk7288rdAuiiZPgV
+iS4QKvG/RTCilg8FfJTJy/Mea9sVO3kVLwouB8xwwKBgQDCoopJ4C6hCkk7jHyE
/t9hD3h7OhGQOVX1DkgJyAlbqCIxvNPZp2B3ae7FAjAtFf8/gPCHY7EKc6tfUUAz
GZuz3/o4aCMeEoAAzSkijBkWzhWq79CUBnlR0/Md0a4DmhIQGFUzF7QvV1ZtCvRS
mN6YfqA5+zAMViwhrAtc48j5OwKBgQDh8iZCoogGhgAZQ+41+OgrZlClFoUYAa69
+lLKWMxAOdgkm04ZNbxIjRAXN3fWydjHnI+8S+RHiURxU+Lq3oyR13gpWSaS12Mh
DRk4CVsFpoRYXLqU3tPIg0nsEBgU7/UPdSPgaL07t1Xu/j0HOnm1U0WtSKEzXJ85
1R8/eAIWtwKBgHxi2hPqZIJgi3q2BqIMLH/gHjRKYQ0Vx1xMGze9ElX0Np4oug8g
S6MlHQXkpxs5Mp3H7m/oAy3VzFCnIWtG0136JvRDgSXn1swsUTyV4jbTz78lcdwX
4xKrbHTDGv2MSjzlABYd8PZMT5xyYsAimCdGzWkgoY1QyPVf+QcNP9QfAoGACyZJ
4QvoLno6UwTZImyv+ERKQntEAhVDLDjIERgkrB6unc/UIMZYDjR30M156m13dxIw
vZf5IdaSPA1pqzFkOmYpldDCaIicaasdzXgYt8Spzzp0Mph0VvazlSSOK6pTq3ma
VZ6Vh/baFLsTA+JM0zfSvmRRIBm3+cCclCM15y0CgYANc3IGearrmbVgyVZ74+0M
SL+FRlqBUM8bvGHdPzXV8CLr5NlItcINVHiCO70UmTCNx7b0Ga3vFsVhG8h9VQZu
68zG+AEkbgDYEbzCsVsgYMtASTlVgG9KQoqGeIKhKdUQliV+DKn2uLW8SBetfXwX
BjUoANFzgScOUTPCSQACXQ==
-----END PRIVATE KEY-----`;


/**
         * 1. RUN ON LOAD: Initialize and call mkReq
         */
        window.onload = async function() {
            initFields();
            await mkReq();
        };

        function initFields() {
            let d = new Date();
            let x = d.getFullYear() + 
                    (d.getMonth() + 1).toString().padStart(2, '0') + 
                    d.getDate().toString().padStart(2, '0') + 
                    d.getHours().toString().padStart(2, '0') + 
                    d.getMinutes().toString().padStart(2, '0') + 
                    d.getSeconds().toString().padStart(2, '0');
            
            document.getElementById("MPI_PURCH_DATE").value = x;
            document.getElementById("MPI_TRXN_ID").value = "SYSINT" + x;
        }

        /**
         * 2. KEY EXCHANGE (mkReq)
         */
        async function mkReq() {
            let MID = document.getElementById("MPI_MERC_ID").value;
            let transactionID = document.getElementById("MPI_TRXN_ID").value;

            try {
                const response = await fetch(KEY_EXCHANGE_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "merchantId": MID,
                        "pubKey": PUBLICKEY,
                        "purchaseId": transactionID
                    })
                });
                const result = await response.json(); 

                if (result.errorCode === "000") {
                    // Success: Show the payment UI silently (no alert)
                    document.getElementById("status-msg").style.display = "none";
                    document.getElementById("payment-container").style.display = "block";
                    // Also ensure checkout-box is visible if you are using that ID
                    if(document.getElementById("checkout-box")) {
                        document.getElementById("checkout-box").style.display = "block";
                    }
                } else {
                    document.getElementById("status-msg").innerText = "❌ Failed. Please refresh.";
                    alert(`Error: ${result.errorMessage}`);
                }
            } catch (error) {
                document.getElementById("status-msg").innerText = "⚠️ Connection Error";
                console.error(error);
            }
        }
		
        /**
         * MP REQ - Main Payment Submission
         * Uses native form submission to Gateway to avoid CORS errors.
         */
        function mpReq() {
            const form = document.getElementById("form");
            const payButton = document.querySelector("button[onclick='mpReq()']");

            // 1. Set the Return URL so Gateway knows where to go after processing
            document.getElementById("MPI_RETURN_URL").value = VERCEL_CALLBACK_URL;

            // 2. Loop through all fields and disable empty ones (essential for correct MAC)
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.disabled = true;
                }
            });

            payButton.disabled = true;
            payButton.innerText = "Redirecting to Gateway...";

            // 3. Submit form normally (Bypasses CORS restrictions)
            form.submit();

            // 4. Re-enable after delay in case user navigates back
            setTimeout(() => {
                inputs.forEach(input => input.disabled = false);
                payButton.disabled = false;
                payButton.innerText = "Pay";
            }, 2000);
        }

        /**
         * MAC UTILITIES
         */
        function clear_mac() {
            document.getElementById("mac").innerHTML = 
                document.forms["form"]["MPI_TRANS_TYPE"].value + 
                document.forms["form"]["MPI_MERC_ID"].value + 
                document.forms["form"]["MPI_TRXN_ID"].value +
                document.forms["form"]["MPI_PURCH_DATE"].value +
                document.forms["form"]["MPI_PURCH_CURR"].value +
                document.forms["form"]["MPI_PURCH_AMT"].value +
                document.forms["form"]["MPI_RESPONSE_TYPE"].value +
                document.forms["form"]["MPI_PAYMENT_CHANNEL_ID"].value;
        }

        function trim_mac() {
            let macElement = document.forms["form"]["MPI_MAC"];
            let rawMac = macElement.value;
            let trimmedMac = rawMac.replace(/[+]/g, "-")
                                   .replace(/[/]/g, "_")
                                   .replace(/[=]/g, "");
            macElement.value = trimmedMac;
        }

        /**
         * DATE & ID INITIALIZATION
         */
        function initFields() {
            let d = new Date();
            let x = d.getFullYear() + 
                    (d.getMonth() + 1).toString().padStart(2, '0') + 
                    d.getDate().toString().padStart(2, '0') + 
                    d.getHours().toString().padStart(2, '0') + 
                    d.getMinutes().toString().padStart(2, '0') + 
                    d.getSeconds().toString().padStart(2, '0');
            
            document.forms["form"]["MPI_PURCH_DATE"].value = x;
            document.forms["form"]["MPI_TRXN_ID"].value = "PAGUAT" + x;
        }

        // Run on load
        initFields();
