import React from 'react'
import PopupTemplate from "@arcgis/core/PopupTemplate";



const propertyPopup = new PopupTemplate({
    title: "🏡 <b>Property Details</b>",
    content: `
      <div style="font-family: 'Segoe UI', sans-serif; font-size: 13px;">
        <div style="background-color: #f4f6f8; padding: 10px; border-radius: 6px; margin-bottom: 10px;">
          <h3 style="margin: 0 0 8px 0; font-size: 15px; color: #333;">🗂 Basic Info</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td><strong>Property No:</strong></td><td><span style="font-weight: bold;">{PropertyNo}</span></td></tr>
            <tr><td><strong>Ward No:</strong></td><td><span style="font-weight: bold;">{Ward}</span></td></tr>
            <tr><td><strong>Owner Name:</strong></td><td><span style="font-weight: bold;">{Ow_Name}</span></td></tr>
            <tr><td><strong>Gender:</strong></td><td><span style="font-weight: bold;">{Gender}</span></td></tr>
            <tr><td><strong>Family Members:</strong></td><td><span style="font-weight: bold;">{HH_Member}</span></td></tr>
            <tr><td><strong>Category:</strong></td><td><span style="font-weight: bold;">{Category}</span></td></tr>
            <tr><td><strong>Panth:</strong></td><td><span style="font-weight: bold;">{Panth}</span></td></tr>
            <tr><td><strong>Cast:</strong></td><td><span style="font-weight: bold;">{Cast}</span></td></tr>
            <tr><td><strong>Sampraday:</strong></td><td><span style="font-weight: bold;">{Sampraday}</span></td></tr>
            <tr><td><strong>Religion:</strong></td><td><span style="font-weight: bold;">{Religion}</span></td></tr>
            <tr><td><strong>Sub Religion:</strong></td><td><span style="font-weight: bold;">{SubReligio}</span></td></tr>
          </table>
        </div>
  
        <div style="background-color: #eef1f5; padding: 10px; border-radius: 6px; margin-bottom: 10px;">
          <h3 style="margin: 0 0 8px 0; font-size: 15px; color: #333;">🏡 House Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td><strong>Ownership:</strong></td><td><span style="font-weight: bold;">{OwnHouse}</span></td></tr>
            <tr><td><strong>House Type:</strong></td><td><span style="font-weight: bold;">{TypeHouse}</span></td></tr>
            <tr><td><strong>Toilet Attached:</strong></td><td><span style="font-weight: bold;">{Att_Toilet}</span></td></tr>
            <tr><td><strong>Drain Connection:</strong></td><td><span style="font-weight: bold;">{Drain_Conn}</span></td></tr>
            <tr><td><strong>Waste Water Connection:</strong></td><td><span style="font-weight: bold;">{Waste_Coll}</span></td></tr>
            <tr><td><strong>Compost Available:</strong></td><td><span style="font-weight: bold;">{Compost}</span></td></tr>
            <tr><td><strong>BioGass Available:</strong></td><td><span style="font-weight: bold;">{BioGass}</span></td></tr>
            <tr><td><strong>House Area:</strong></td><td><span style="font-weight: bold;">{Land_Area}</span></td></tr>
          </table>
        </div>
  
        <div style="background-color: #f4f6f8; padding: 10px; border-radius: 6px;">
          <h3 style="margin: 0 0 8px 0; font-size: 15px; color: #333;">💰 Financial & Agriculture</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td><strong>Annual Income:</strong></td><td>₹{Income}</td></tr>
            <tr><td><strong>No of Sheep:</strong></td><td><span style="font-weight: bold;">{No_of_Shee}</span></td></tr>
            <tr><td><strong>Irrigation Available:</strong></td><td><span style="font-weight: bold;">{Irrigation}</span></td></tr>
            <tr><td><strong>Uses Fertilizer:</strong></td><td><span style="font-weight: bold;">{Fertilizer}</span></td></tr>
            <tr><td><strong>Crop Season:</strong></td><td><span style="font-weight: bold;">{Crop_Seaso}</span></td></tr>
          </table>
        </div>
      </div>
    `
  });
  


export {propertyPopup} ;
