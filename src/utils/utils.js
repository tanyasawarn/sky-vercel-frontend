import axios from 'axios';
import CryptoJS from 'crypto-js';
  
  
export const getCashfree = () => {
  if (typeof window !== "undefined" && window.Cashfree) {
    return window.Cashfree({
      mode: "production", // or "sandbox"
    });
  }
  return null;
};
 

const PAYU_KEY = 'ssVm5O';
const PAYU_SALT = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrrCw89KJClaldKP+gNq/HxcYPDf65V8mZ59kVCTIQ5fp2S/2obFQgx/9Ztoku5nYnPwbng3S7kfAqbLixdbGx9e4RmGdYlCRTvKdwXsDq7X8dH3jnZWie2v2oLkKZ3okibcyKnAJUHwB/oJD45T4u9jbjNnX/bi4v0TxTEzzmXOOJ7Btkd+WZjHk92PUbFYIoa+A0Rqmk7MG6Zr84OeXEs4LwgqKN26eVFXy4xN9WNz1bQ0jFD7hrR+QxXwSbIdLeJRB8JM6RpRlrYfQy5Maj0GexnCvCEenecAEMBpPZmafznAIMdzpZyQkHIi2pBdop4l9eQAtU9aBKSShvCjFTAgMBAAECggEAQoAohthQ/rAQ8miOVVa50w42weAu+0cZbkgUnIR6Y3djBW48bYDBOg2fSfZev89Al8VffFE85+gJe7Wv+fZYhlJ5DVHXPsXsKI/c4LejzZ2Abxyg7ionU9oLBpoc7JP61V5pLIxwjnuP6uCdJ/1NkE2KR4vyO6dHtvg7gQbjwWw5aqc0I+wjlMUl/1ogMjAWiF1BCW2vSvdUSZ2rU7rmvmP/V3jpXgPNV3KY6kS4aaI2F7E6a2DdJw9rPTs/PMtQPjh6EI1GnU7rdufBM3Qw7U6Q3XxKlYQaSJLbpy+zGvA82XmFgYLrUdSxnYbf9IvhpLPccRvrBAT5yyHc0b3ioQKBgQDfou1T9KCw3zlAFbO5mWkwUTzwuS3n8r/yFWJkCwcn2pRI/ygOm0RJt4erJT3MpxcX1LlIEuC63pRAX62Y8MLPfL1efLC3lAXplPoy48+u+EZMH14+xt5l/Vxbko38WqlP1K1hRyq0LZKEr/xz999XAkzXC3FCWNwVoCFqi0RhgwKBgQDEhCLxJxeykNUi8m/1bisBrddsX4e2bPuuBoI0LZbUcvkkY4VtEJlo/Ee98bwwJ9++U+9Qhi9EddsdiQsxXCekYn832e2HTzSNSWuJFszY+TNiaP9GExAaPldgroJCYZyE1fOCQajNuHMbS1BirxCRXfYlGSJhHwfOU5k3ZQf38QKBgQCYlKbsAxmn04VSDfyDgwHbr3GupAmIGX2Qg7qPm16UeHN3om8IGDNtQETWJiCWAuKkpcSMQiUGGlp32U+t64Ze3jKtxtEjT2EBT12tXvUR4d7EjRpWJoUSfNyIteMd7BVcnDR3DIE8UWOIGDJcRSAiUzVt+yaZJ9tw/cIO2VocVQKBgQC0G6ruvHaCqS0+z1X/ag4uhsa2w8NdVftBXyO8cMAZTJq9WB00fY8s4nNaShDBTfpJtSHT+ned1iqRokXI4n5OshuI88o4RkaS62SMi4IJpjQLENJNxjDu7I4mxSoLbu0F7hU1H7p3eYK91EQDfhHAOY7cJ3IT812zI3l8hLNN8QKBgFLaINEaweJGhS90xVh9UhICwCi3ffVtxRVCVr9sBfZhifPdieHp3jE6t+kjjjEX1AOMXZZuQ3O7CFyfhbJhuHureP8KbX1cXYmBdQRBhhZ0v0tbKJFFOlqe7/dGydAJyrT7nhZV6/IxEhXcZENUuaXLfuwu/I6UWWvTgeYYirBt';
const PAYU_API = 'https://secure.payu.in/_payment'; // Use the production URL for live environment

const payu = {
    key: PAYU_KEY,
    salt: PAYU_SALT,
    api: PAYU_API,
    mode: 'production', // or 'sandbox' for testing
    createOrder: async (orderDetails) => {
        const { txnid, amount, productinfo, firstname, email, phone, surl, furl } = orderDetails;
        const hashString = `${PAYU_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|${phone}|||||||||||${PAYU_SALT}`;
        const hash = CryptoJS.SHA512(hashString).toString();

        const payload = {
            key: PAYU_KEY,
            txnid,
            amount,
            email,
            phone,
            surl,
            hash,
        };

        try {
            const response = await axios.post(PAYU_API, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error creating PayU order:', error);
            throw error;
        }
    },
};

export{ cashfree, payu };