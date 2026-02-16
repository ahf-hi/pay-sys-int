const CONFIG = {
    PUBLICKEY: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq8j2SHHfzMLlhYppnlk-QqjjjZwMkhK6s6rERd0JhhY_6-Md4Z0327uEdfNbJrSEPJVPT55gjRhx4MorEhrabuafuY8thSPS4epwkOjjPtELwZxViWe1dzG5TQakJ_i8ZOQuUYFJg02RcwUTzE3ty-x7mkwj9t2wAdRqTagyaDIAVMTxP_Y4AS76xjA3aH43Q0HKHGAxxIlXBIQxImuPhlUbPtVtTHIsUwkIx2BDh8kPZ3Mgr3Cyky0F-cHpEFSi3rPSSLD_FVHlJRW2cODVm8E-s98CURQYs1npzDztzZgZPnnb9K57CB2Z50Ve6qUV7z4-uHs3nehiMJHktIs7LQIDAQAB",
    PRIVATE_KEY_PEM: `-----BEGIN PRIVATE KEY-----
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
-----END PRIVATE KEY-----`,
    MID: "000000000000006",
    VERCEL_CALLBACK_URL: "https://sys-int-nine.vercel.app/api/callback"
};

/**
 * INITIAL LOAD
 */
async function loadPaymentForm(method) {
    if (!method) return;
    const container = document.getElementById('dynamic-form-container');
    try {
        const response = await fetch(`${method}.html`);
        container.innerHTML = await response.text();
        initFormFields(method);

        // Requirement: Channels must start with mkReq as well
        if (method === 'fpx' || method === 'ewallets') {
            const form = document.getElementById('payment-form');
            await fetchChannelsWithHandshake(form.dataset.mkreq, method);
        }
    } catch (err) {
        console.error("Form Load Error:", err);
    }
}

function initFormFields(method) {
    const ts = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
    setFieldValue("MPI_PURCH_DATE", ts);
    setFieldValue("MPI_TRXN_ID", (method === 'duitnowqr' ? "DNQR" : "PAY") + ts);
    setFieldValue("MPI_MERC_ID", CONFIG.MID);
    setFieldValue("MPI_RETURN_URL", CONFIG.VERCEL_CALLBACK_URL);
}

function setFieldValue(name, value) {
    const el = document.getElementsByName(name)[0];
    if (el) el.value = value;
}

/**
 * CHANNEL FETCHING (mkReq -> channels)
 */
async function fetchChannelsWithHandshake(mkReqUrl, method) {
    const channelTrxnId = "CHNL" + Date.now();
    const select = document.getElementsByName("MPI_PAYMENT_CHANNEL_ID")[0];

    try {
        // 1. Handshake for Channels
        const mkRes = await fetch(mkReqUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "merchantId": CONFIG.MID,
                "pubKey": CONFIG.PUBLICKEY,
                "purchaseId": channelTrxnId
            })
        });
        const mkData = await mkRes.json();
        if (mkData.errorCode !== "000") throw new Error("Channel Handshake Failed");

        // 2. Fetch Channel List
        const macString = CONFIG.MID + channelTrxnId;
        const cnlRes = await fetch("https://devlinkv2.paydee.co/mpigw/channels", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "MPI_MERC_ID": CONFIG.MID, 
                "MPI_TRXN_ID": channelTrxnId, 
                "MPI_MAC": macString 
            })
        });
        const cnlData = await cnlRes.json();

        if (cnlData.MPI_PAYMENT_CHANNEL) {
            select.innerHTML = '<option value="">-- Select --</option>';
            cnlData.MPI_PAYMENT_CHANNEL.forEach(ch => {
                const opt = document.createElement("option");
                opt.value = ch.MPI_CHANNEL_ID;
                opt.innerText = ch.MPI_CHANNEL_NAME;
                if (ch.MPI_CHANNEL_STATUS !== 'A') opt.disabled = true;
                select.appendChild(opt);
            });
        }
    } catch (e) {
        console.error("Channel Error:", e);
        if(select) select.innerHTML = '<option value="">Error loading list</option>';
    }
}

/**
 * FINAL PAYMENT PROCESS (mkReq -> mpReq)
 */
async function processPayment() {
    const form = document.getElementById("payment-form");
    const method = document.getElementById("method_selector").value;
    const amount = document.getElementById("display_amt").value;
    
    if (!amount || !form) return alert("Please fill in amount and select method.");

    // Convert to cents
    setFieldValue("MPI_PURCH_AMT", Math.round(parseFloat(amount) * 100));

    // Prepare Payload
    const mkReqPayload = {
        "merchantId": CONFIG.MID,
        "pubKey": CONFIG.PUBLICKEY,
        "purchaseId": document.getElementsByName("MPI_TRXN_ID")[0].value
    };

    // Requirement: Add paymentMethod = DNQR for DuitNow QR
    if (method === 'duitnowqr') {
        mkReqPayload.paymentMethod = "DNQR";
    }

    try {
        // 1. Final Handshake
        const res = await fetch(form.dataset.mkreq, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mkReqPayload)
        });
        const result = await res.json();
        if (result.errorCode !== "000") throw new Error(result.errorMessage);

        // 2. Signature & Omission Logic
        const sequence = ["MPI_TRANS_TYPE", "MPI_MERC_ID", "MPI_PAN", "MPI_CARD_HOLDER_NAME", "MPI_PAN_EXP", "MPI_CVV2", "MPI_TRXN_ID", "MPI_ORI_TRXN_ID", "MPI_PURCH_DATE", "MPI_PURCH_CURR", "MPI_PURCH_AMT", "MPI_PAYMENT_CHANNEL_ID"];
        let macString = "";
        
        sequence.forEach(name => {
            const el = document.getElementsByName(name)[0];
            if (el && el.value.trim() !== "") {
                macString += el.value;
            } else if (el) {
                el.disabled = true; // Prevents sending empty fields in Form POST
            }
        });

        // 3. Sign and Submit
        const signature = await signData(macString, CONFIG.PRIVATE_KEY_PEM);
        const macField = document.getElementsByName("MPI_MAC")[0];
        macField.disabled = false;
        macField.value = signature;

        form.action = form.dataset.mpreq;
        form.method = "POST";
        form.submit(); // Browser sends as x-www-form-urlencoded
    } catch (err) {
        alert("Payment Handshake Error: " + err.message);
    }
}

async function signData(message, pem) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const b64 = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\n|\r/g, '');
    const binaryKey = Uint8Array.from(atob(b64), c => c.charCodeAt(0)).buffer;
    const privateKey = await window.crypto.subtle.importKey("pkcs8", binaryKey, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
    const signature = await window.crypto.subtle.sign("RSASSA-PKCS1-v1_5", privateKey, data);
    return btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
