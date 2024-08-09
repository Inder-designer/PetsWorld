import React from "react";
import CurrencyFormat from "./CurrencyFormatter";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { KeyboardArrowDown } from "@mui/icons-material";

const Invoice = ({ data }) => {
  const formattedDate = (dateString) => {
    if (!dateString) return ""; // Return empty string if dateString is undefined or null

    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const Invoice = ({ order }) => (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ~ {new Date().toLocaleDateString()} ~
        </Text>
        <Text style={styles.title}>Invoice</Text>
        <Text style={styles.companyInfo}>Company Name: Example Corp</Text>
        <Text style={styles.companyInfo}>
          Company Address: 1234 Main St, Anytown, USA
        </Text>
        <Text style={styles.companyInfo}>Email: contact@example.com</Text>
        <Text style={styles.companyInfo}>Phone: (123) 456-7890</Text>
        <Text style={styles.orderDetails}>Order ID: {order?.orderId}</Text>
        <Text style={styles.orderDetails}>
          Date: {formattedDate(order?.createdAt)}
        </Text>
        <Text style={styles.sectionTitle}>Shipping Info</Text>
        <Text style={styles.sectionItem}>
          Name: {order?.shippingInfo?.name}
        </Text>
        <Text style={styles.sectionItem}>
          Email: {order?.shippingInfo?.email}
        </Text>
        <Text style={styles.sectionItem}>
          Mobile: {order?.shippingInfo?.mobile}
        </Text>
        <Text style={styles.sectionTitle}>Order Items</Text>
        {order?.orderItems.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>Product: {item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: {CurrencyFormat(item.price)}</Text>
            <Text>
              Discount: -{CurrencyFormat(item.price - item.discountPrice)}
            </Text>
            <Text>Subtotal: {CurrencyFormat(item.discountPrice)}</Text>
          </View>
        ))}
        <Text style={styles.total}>
          Total: {CurrencyFormat(order?.totalPrice)}
        </Text>
      </Page>
    </Document>
  );

  return (
    <div>
      {data && (
        <PDFDownloadLink
          document={<Invoice order={data} />}
          fileName={`invoice_${data.orderId}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading Invoice..." : <span className="hover:text-blue-600 pr-3 hover:underline">Invoice <KeyboardArrowDown/></span>
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  companyInfo: {
    fontSize: 12,
    marginBottom: 10,
  },
  orderDetails: {
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 10,
    borderBottom: "1px solid #000",
  },
  sectionItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  item: {
    marginBottom: 10,
  },
  total: {
    fontSize: 16,
    marginTop: 20,
    borderTop: "1px solid #000",
    paddingTop: 10,
  },
});

export default Invoice;
