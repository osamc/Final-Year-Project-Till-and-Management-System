package com.sam.tillsystem.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sam.tillsystem.models.user.Seller;
import com.sam.tillsystem.service.SellerImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("seller")
@Tag(name="Seller API", description = "The Seller API for maintaining and creating Users")
public class SellerController {

	@Autowired
	SellerImpl sellerService;
	
	@PostMapping("createSeller")
	@Operation(summary = "Creates a seller", description = "This method creates a Seller to be used within the system", responses = {
			@ApiResponse(responseCode = "200", description = "Seller created"),
			@ApiResponse(responseCode = "400", description = "Seller not created") })
	ResponseEntity<Seller> createSeller(@RequestBody @Parameter(description = "Seller to create") Seller seller) {
		Seller created = sellerService.createSeller(seller.getName(), seller.getLogin());
		
		return new ResponseEntity<>(created, created != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("getSeller/{id}")
	@Operation(summary = "Get Seller by Id", description = "Gets the Seller associated with the given id from the database", responses = {
			@ApiResponse(responseCode = "200", description = "Seller Found"),
			@ApiResponse(responseCode = "400", description = "Seller not found") })
	ResponseEntity<Seller> getSeller(@PathVariable("id") @Parameter(description = "Id of Seller to find") int id) {
		Seller fromDb = this.sellerService.getSeller(id);
		return new ResponseEntity<>(fromDb, fromDb != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("getSellers")
	@Operation(summary = "Gets all Sellers", description = "Returns all Sellers found within the database", responses = {
			@ApiResponse(responseCode = "200", description = "Sellers list returned")})
	ResponseEntity<List<Seller>> getSellers() {
		return new ResponseEntity<>(this.sellerService.getSellers(), HttpStatus.OK);
	}
	
	@PostMapping("updateSeller")
	@Operation(summary = "Updates a Seller", description = "This method Updates a Seller within the system", responses = {
			@ApiResponse(responseCode = "200", description = "Seller Updates"),
			@ApiResponse(responseCode = "400", description = "Seller not Updates") })
	ResponseEntity<Boolean> updateSeller(
			@RequestBody @Parameter(description = "Seller to be updated") Seller seller) {
		Boolean success = this.sellerService.updateSeller(seller);
		return new ResponseEntity<>(success, success ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("deleteSeller")
	@Operation(summary = "Deletes a Seller", description = "This method Deletes a Seller within the system", responses = {
			@ApiResponse(responseCode = "200", description = "Seller deleted"),
			@ApiResponse(responseCode = "400", description = "Seller not deleted") })
	ResponseEntity<Boolean> deleteSeller(
			@RequestBody @Parameter(description = "Seller to be deleted") Seller seller) {
		Boolean success = this.sellerService.removeSeller(seller);
		return new ResponseEntity<>(success, success ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
}
